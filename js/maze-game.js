var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');


var avatarSize = 32;
var nbHorizontalCells = 15;
var nbVerticalCells = 10;
var cellSize = 60;

canvas.width = cellSize * nbHorizontalCells;
canvas.height = cellSize * nbVerticalCells;
document.body.appendChild(canvas);

var diagonal = Math.pow(Math.pow(nbHorizontalCells * cellSize, 2) +
Math.pow(nbVerticalCells * cellSize, 2), 0.5);
var radius = 0.2;
var sightRange = 1.3 * cellSize;

var myMaze = (function() {
  var nbHorizontalCells;
  var nbVerticalCells;
  var cellSize;
  var wallThickness = 16;
  var visited = [];
  var vWalls = [];
  var hWalls = [];

  var init = function(_nbHorizontalCells, _nbVerticalCells, _cellSize) {
    cellSize = _cellSize;
    nbHorizontalCells = _nbHorizontalCells;
    nbVerticalCells = _nbVerticalCells;
    var i = 0;
    var j = 0;
    for (i = 0; i < nbVerticalCells; i++) {
      visited[i] = [];
      for (j = 0; j < nbHorizontalCells; j++) {
        visited[i][j] = 0;
      }
    }

    for (i = 0; i < nbVerticalCells + 1; i++) {
      hWalls[i] = [];
      for (j = 0; j < nbHorizontalCells; j++) {
        hWalls[i][j] = 1;
      }
    }

    for (i = 0; i < nbVerticalCells; i++) {
      vWalls[i] = [];
      for (j = 0; j < nbHorizontalCells + 1; j++)
        vWalls[i][j] = 1;
    }
  };

  var getUnvisitedNeighbors = function(x, y) {
    var unvisitedNeighbors = [];
    var neighbors = [
          [x, y - 1],
          [x, y + 1],
          [x - 1, y],
          [x + 1, y]
    ];
    for (var i = 0; i < 4; i++) {
      if (neighbors[i][0] > -1 && neighbors[i][0] < nbVerticalCells &&
         neighbors[i][1] > -1 && neighbors[i][1] < nbHorizontalCells &&
         visited[neighbors[i][0]][neighbors[i][1]] === 0) {
        unvisitedNeighbors.push([neighbors[i][0], neighbors[i][1]]);
      }
    }
    return (unvisitedNeighbors);
  };

  var generateMaze = function() {
    var cell = [0, 0];
    var path = [cell];
    while (path.length > 0) {
      var current = path[path.length - 1];
      visited[current[0]][current[1]] = 1;
      var potentialNeighbors = getUnvisitedNeighbors(current[0], current[1]);
      var nbNeighbors = potentialNeighbors.length;
      if (nbNeighbors === 0) {
        path.pop();
      } else {  
        var nextCell = potentialNeighbors[Math.floor(Math.random() *
           nbNeighbors)];
        if (current[0] === nextCell[0]) { 
          vWalls[current[0]][Math.ceil(0.5 * (current[1] + nextCell[1]))] = 0;
        } else {
          hWalls[Math.ceil(0.5 * (current[0] + nextCell[0]))][current[1]] = 0;
        }
        path.push(nextCell);
      }
    }
  };

  var drawMaze = function() {
    ctx.beginPath();
    ctx.lineWidth = 30;
    var i;
    var j;
    for (i = 0; i < nbVerticalCells + 1; i++) {
      for (j = 0; j < nbHorizontalCells; j++)
        if (hWalls[i][j] === 1) {
          ctx.moveTo(j * cellSize - wallThickness / 2, i * cellSize);
          ctx.lineTo((j + 1) * cellSize + wallThickness / 2, i * cellSize);
        }
    }
    for (i = 0; i < nbVerticalCells; i++) {
      for (j = 0; j < nbHorizontalCells + 1; j++)
        if (vWalls[i][j] === 1) {
          ctx.moveTo(j * cellSize, i * cellSize - wallThickness / 2);
          ctx.lineTo(j * cellSize, (i + 1) * cellSize + wallThickness / 2);
        }
    }
    ctx.strokeStyle = 'rgba(49,95,151)';
    ctx.stroke();
  };

  var updatePositions = function(avatar, keysPressed, modifier) {
    var targetX = avatar.x;
    var targetY = avatar.y;
    if (38 in keysPressed) { 
      targetY = avatar.y - Math.min(avatar.speed * modifier, cellSize);
      if (hWalls[avatar.cellY][avatar.cellX] === 1 ||
        (((avatar.cellX + 1) * cellSize - avatar.x) < wallThickness &&
        vWalls[avatar.cellY - 1][avatar.cellX + 1] === 1) ||
          ((avatar.x - avatar.cellX * cellSize) < wallThickness &&
          vWalls[avatar.cellY - 1][avatar.cellX] === 1)) {
        avatar.y = Math.max(targetY,
        avatar.cellY * cellSize + wallThickness);
      } else {
        avatar.y = targetY;
      }
      avatar.cellY = Math.floor(avatar.y / cellSize);
    }
	
	    if (87 in keysPressed) { 
      targetY = avatar.y - Math.min(avatar.speed * modifier, cellSize);
      if (hWalls[avatar.cellY][avatar.cellX] === 1 ||
        (((avatar.cellX + 1) * cellSize - avatar.x) < wallThickness &&
        vWalls[avatar.cellY - 1][avatar.cellX + 1] === 1) ||
          ((avatar.x - avatar.cellX * cellSize) < wallThickness &&
          vWalls[avatar.cellY - 1][avatar.cellX] === 1)) {
        avatar.y = Math.max(targetY,
        avatar.cellY * cellSize + wallThickness);
      } else {
        avatar.y = targetY;
      }
      avatar.cellY = Math.floor(avatar.y / cellSize);
    }
	
    if (40 in keysPressed) { 
      targetY = avatar.y + Math.min(avatar.speed * modifier, cellSize);
      if (hWalls[avatar.cellY + 1][avatar.cellX] === 1 ||
        (((avatar.cellX + 1) * cellSize - avatar.x) < wallThickness &&
        vWalls[avatar.cellY + 1][avatar.cellX + 1] === 1) ||
          ((avatar.x - avatar.cellX * cellSize) < wallThickness &&
          vWalls[avatar.cellY + 1][avatar.cellX] === 1)) {
        avatar.y = Math.min(targetY,
        (avatar.cellY + 1) * cellSize - wallThickness);
      } else {
        avatar.y += avatar.speed * modifier;
      }
      avatar.cellY = Math.floor(avatar.y / cellSize);
    }
	
	if (83 in keysPressed) { 
      targetY = avatar.y + Math.min(avatar.speed * modifier, cellSize);
      if (hWalls[avatar.cellY + 1][avatar.cellX] === 1 ||
        (((avatar.cellX + 1) * cellSize - avatar.x) < wallThickness &&
        vWalls[avatar.cellY + 1][avatar.cellX + 1] === 1) ||
          ((avatar.x - avatar.cellX * cellSize) < wallThickness &&
          vWalls[avatar.cellY + 1][avatar.cellX] === 1)) {
        avatar.y = Math.min(targetY,
        (avatar.cellY + 1) * cellSize - wallThickness);
      } else {
        avatar.y += avatar.speed * modifier;
      }
      avatar.cellY = Math.floor(avatar.y / cellSize);
    }
	
    if (37 in keysPressed) { 
      targetX = avatar.x - Math.min(avatar.speed * modifier, cellSize);
      if (vWalls[avatar.cellY][avatar.cellX] === 1 ||
        (((avatar.cellY + 1) * cellSize - avatar.y) < wallThickness &&
        hWalls[avatar.cellY + 1][avatar.cellX - 1] === 1) ||
          ((avatar.y - avatar.cellY * cellSize) < wallThickness &&
          hWalls[avatar.cellY][avatar.cellX - 1] === 1)) {
        avatar.x = Math.max(targetX,
        avatar.cellX * cellSize + wallThickness);
      } else {
        avatar.x -= avatar.speed * modifier;
      }
      avatar.cellX = Math.floor(avatar.x / cellSize);
    }
	
	if (65 in keysPressed) { 
      targetX = avatar.x - Math.min(avatar.speed * modifier, cellSize);
      if (vWalls[avatar.cellY][avatar.cellX] === 1 ||
        (((avatar.cellY + 1) * cellSize - avatar.y) < wallThickness &&
        hWalls[avatar.cellY + 1][avatar.cellX - 1] === 1) ||
          ((avatar.y - avatar.cellY * cellSize) < wallThickness &&
          hWalls[avatar.cellY][avatar.cellX - 1] === 1)) {
        avatar.x = Math.max(targetX,
        avatar.cellX * cellSize + wallThickness);
      } else {
        avatar.x -= avatar.speed * modifier;
      }
      avatar.cellX = Math.floor(avatar.x / cellSize);
    }
	
    if (39 in keysPressed) { 
      targetX = avatar.x + Math.min(avatar.speed * modifier, cellSize);
      if (vWalls[avatar.cellY][avatar.cellX + 1] === 1 ||
        (((avatar.cellY + 1) * cellSize - avatar.y) < wallThickness &&
        hWalls[avatar.cellY + 1][avatar.cellX + 1] === 1) ||
          ((avatar.y - avatar.cellY * cellSize) < wallThickness &&
          hWalls[avatar.cellY][avatar.cellX + 1] === 1)) {
        avatar.x = Math.min(targetX,
        (avatar.cellX + 1) * cellSize - wallThickness);
      } else {
        avatar.x += avatar.speed * modifier;
      }
      avatar.cellX = Math.floor(avatar.x / cellSize);
    }
	
	if (68 in keysPressed) { 
      targetX = avatar.x + Math.min(avatar.speed * modifier, cellSize);
      if (vWalls[avatar.cellY][avatar.cellX + 1] === 1 ||
        (((avatar.cellY + 1) * cellSize - avatar.y) < wallThickness &&
        hWalls[avatar.cellY + 1][avatar.cellX + 1] === 1) ||
          ((avatar.y - avatar.cellY * cellSize) < wallThickness &&
          hWalls[avatar.cellY][avatar.cellX + 1] === 1)) {
        avatar.x = Math.min(targetX,
        (avatar.cellX + 1) * cellSize - wallThickness);
      } else {
        avatar.x += avatar.speed * modifier;
      }
      avatar.cellX = Math.floor(avatar.x / cellSize);
    }
	
    avatar.cellY = Math.floor(avatar.y / cellSize);
    avatar.cellX = Math.floor(avatar.x / cellSize);
  };
  return {
    init: init,
    generateMaze: generateMaze,
    drawMaze: drawMaze,
    updatePositions: updatePositions
  };
})();

// Declaration of useful time variables
var startTime;
var lastUpdateTime = Date.now();

// Avatar
var avatarReady = false;
var avatarImage = new Image();
avatarImage.onload = function() {
  avatarReady = true;
};
avatarImage.src = 'img/Jose.png';
var avatar = {
  speed: 100 
};

// Goal
var goalReady = false;
var goalImage = new Image();
goalImage.onload = function() {
  goalReady = true;
};
goalImage.src = 'img/Helicopter.png';
var goal = {};


var keysDown = {};
addEventListener('keydown', function(e) {
  keysDown[e.keyCode] = true;
}, false);
addEventListener('keyup', function(e) {
  delete keysDown[e.keyCode];
}, false);


var reset = function() {
  avatar.cellX = Math.floor(Math.random() * nbHorizontalCells);
  avatar.cellY = Math.floor(Math.random() * nbVerticalCells);
  avatar.x = (avatar.cellX + 0.5) * cellSize;
  avatar.y = (avatar.cellY + 0.5) * cellSize;
  goal.cellX = Math.floor(Math.random() * nbHorizontalCells);
  goal.cellY = Math.floor(Math.random() * nbVerticalCells);
  goal.x = (goal.cellX + 0.4) * cellSize;
  goal.y = (goal.cellY + 0.4) * cellSize;

  myMaze.init(nbHorizontalCells, nbVerticalCells, cellSize);
  myMaze.generateMaze();
};


var update = function(modifier) {
  var distanceToGoal = 600;
  radius = (radius + (1 / (distanceToGoal / diagonal) - 1)) %
   (distanceToGoal / 2);
  myMaze.updatePositions(avatar, keysDown, modifier);
  if (Math.abs(avatar.x - goal.x) < 0.4 * cellSize &&
  Math.abs(avatar.y - goal.y) < 0.4 * cellSize) {
	
	document.write('<title>Jose Extraction</title><link type="image/x-icon" rel="shortcut icon" href="icons/favicon.ico"><style>.iksweb{display: inline-block;cursor: pointer; font-size:20px;text-decoration:none;padding:12px 23px; color:#000000;background:#feb368;border-radius:14px;border:3px solid #354251;} .body{margin: 0; padding: 0; background: #000000;color: #ffc060; font-size: 14px; line-height: 1.2em; text-align: center; font-weight: normal;}</style><body>We did it! It was already dark, and there was little time left to get out. I hear a helicopter, it seems somewhere nearby.</br></br><a class="iksweb" href="https://lrmap.fun/anticheat" title="START PLAY">START PLAY</a><img src = "img/cool-jose.png" style ="width:150px"></body>');
	pause;

  }
};


var render = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myMaze.drawMaze();
  if (goalReady) {
    ctx.drawImage(goalImage, goal.x - avatarSize / 2, goal.y - avatarSize / 2);
  }
  if (avatarReady) {
    ctx.drawImage(avatarImage, avatar.x - avatarSize / 2,
      avatar.y - 0.75 * avatarSize);
  }

  ctx.beginPath();
  ctx.arc(goal.x, goal.y, radius, 0, 2 * Math.PI, false);
  ctx.lineWidth = 5;
  ctx.fillStyle = 'transparent';
  ctx.fill();
  ctx.strokeStyle = 'rgba(33,231,81,' + (1 - (radius / 300)) + ')';
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
  var grd = ctx.createRadialGradient(avatar.x, avatar.y, 16,
    avatar.x, avatar.y, sightRange);
  var opacity = 1.0; 
  grd.addColorStop(0, 'transparent');
  grd.addColorStop(1, 'rgba(0,0,0,' + opacity + ')');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.closePath();

};

/**
 * The main game loop
 */
var main = function() {
  var now = Date.now();
  // Estimate the time since the last update was made
  var delta = now - lastUpdateTime;

  // Update the game according to how much time has passed
  update(delta / 1000);
  render();

  lastUpdateTime = now;

  requestAnimationFrame(main);
};


var w = window;
requestAnimationFrame = w.requestAnimationFrame ||
w.webkitRequestAnimationFrame || w.msRequestAnimationFrame ||
w.mozRequestAnimationFrame;

reset();
main();
