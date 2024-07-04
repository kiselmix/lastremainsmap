var GameManager = function() {
  this.init();
  this.setup();
  this.start();
}

// Initial game settings
GameManager.prototype.init = function () {
  this.score = 0;
  this.loss = 0;
  this.over = false;
  this.won = false;

  this.count = 4;
  this.level = 1;
  this.speed = 400;
  this.interval = this.speed*3.8;
  this.point = 1;

  this.hearts = {};
  this.golds = {};

  this.gameTimer;

  this.basketStartPosition = { x: 0, y: 1 };
};

// Set up the game
GameManager.prototype.setup = function () {
  this.keyboard = new KeyboardInputManager();
  this.keyboard.on("move", this.move.bind(this));

  this.grid = new Grid(this.count);
  this.basket = new Basket(this.basketStartPosition);

  for (var i = 0; i < this.count; i++) {
    this.hearts[i] = new Heart(i, this.grid.list[i], this.point);
  }

  this.HTMLredraw = new HTMLredraw();

  if (this.isMobile()) {
    this.touchscreenModification();
  }
};

GameManager.prototype.isMobile = function() {
  try {
    document.createEvent("TouchEvent");
    return true;
  }
  catch(e) {
    return false;
  }
};

GameManager.prototype.move = function (data) {
  var position = { x: this.basket.x, y: this.basket.y };

  switch (data.type) {
    case 'arrow':
      // 0: up, 1: right, 2: down, 3: left, 4: R - restart
      if(data.key%2 == 0) {
        position.y = (data.key > 0) ? 0 : 1;
      } else {
        position.x = (data.key > 2) ? 0 : 1;
      }
      break;
    case 'button':
      position.x = data.x;
      position.y = data.y;
      break;
    case 'common':
      if (data.key == 'restart') {
        this.reStart();
        return false;
      }
      break;
  }

  this.basket.updatePosition(position, this.api.bind(this));
}

GameManager.prototype.start = function () {
  this.runGear();
};

GameManager.prototype.reStart = function () {
  window.location.reload();
};

GameManager.prototype.runGear = function () {
  var self = this;
  this.gameTimer = setInterval(function() {
    var heart = self.findAvailableHeart();
    if (heart >= 0 && !this.over) {
      self.runGold(heart);
    }
  }, this.interval);
};

GameManager.prototype.suspendGear = function () {
  clearInterval(this.gameTimer);
  this.runGear();
};

GameManager.prototype.haltGear = function () {
  clearInterval(this.gameTimer);
  this.over = true;
};

GameManager.prototype.upLevel = function () {
  this.level++;

  switch (true) {
    case (this.level < 45):
      this.speed += -6;
      break;
    case (this.level > 46):
      this.speed += 0;
      break;
    default:
      this.speed += -8;
      break;
  }
  this.interval = this.speed*3.4;

  this.suspendGear();
};

GameManager.prototype.updateScore = function (data) {
  if (this.grid.list[data.gold].x == this.basket.x && this.grid.list[data.gold].y == this.basket.y) {
    this.score += this.point;
    this.HTMLredraw.updateScore({ value: this.score });

    if (this.score >= 500) {
      this.gameWin();
      return false;
    }

    if (!(this.score % 10)) {
      this.upLevel();
    }
  } else {
    this.loss++;
    this.HTMLredraw.updateLossCount({ loss: this.loss });
    if (this.loss > 2 && !this.over) {
      this.gameOver();
    }
  }
};

GameManager.prototype.findAvailableHeart = function() {
  var avail = this.grid.avail.diff(this.grid.hold);

  if (!avail) {
    return null;
  }

  var heart = avail.randomElement();
  this.api('onHoldHeart', { gold: heart });

  return heart;
};

GameManager.prototype.runGold = function(heart) {
  this.hearts[heart].gold.run(this.speed, this.api.bind(this));
};

GameManager.prototype.gameOver = function() {
  this.haltGear();
  this.HTMLredraw.gameOver();
};

GameManager.prototype.gameWin = function() {
  this.haltGear();
  this.HTMLredraw.gameWin();
};

GameManager.prototype.api = function(method, data) {
  switch (method) {
    case 'updateScore':
      this.updateScore(data);
      break;
    case 'onHoldHeart':
      this.grid.onHold(data.gold);
      break;
    case 'unHoldHeart':
      this.grid.unHold(data.gold);
      break;
    case 'updateGoldPosition':
      this.HTMLredraw.updateGoldPosition(data);
      break;
    case 'updateBasketPosition':
      this.HTMLredraw.updateBasketPosition(data);
      break;
  }
};

GameManager.prototype.touchscreenModification = function() {
  var buttons = document.querySelector('#controls').getElementsByTagName('a');

  var self = this;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      var data = { x: this.getAttribute('data-x'), y: this.getAttribute('data-y'), type: 'button' };
      self.move(data);
      return false;
    };
  }

  this.HTMLredraw.mobileVersion();
};
