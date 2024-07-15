function HTMLredraw() {
  this.bodyWrap = document.querySelector('body');
  this.gameWrap = document.querySelector('#game-wrap');
  this.scoreWrap = document.querySelector('#score');
  this.messageWrap = document.querySelector('#message');
  this.scoreNums = 3;
}

HTMLredraw.prototype.updateGoldPosition = function(data) {
  this.changeAttributesValue(['data-gold-' + data.gold], [data.position]);
};

HTMLredraw.prototype.updateBasketPosition = function(data) {
  this.changeAttributesValue(['data-bx', 'data-by'], [data.x, data.y]);
};

HTMLredraw.prototype.changeAttributesValue = function(attributes, values) {
  if (attributes instanceof Array && values instanceof Array && attributes.length == values.length) {
    for (var i = 0; i < attributes.length; i++) {
      this.gameWrap.setAttribute(attributes[i], values[i]);
    }
  }
};

HTMLredraw.prototype.updateScore = function(data) {
  var elements = this.scoreWrap.getElementsByTagName('li');
  var score = data.value.toString();
  var empty = (this.scoreNums - score.length);

  for (var i = 0; i < elements.length; i++) {
    var num = (i < empty) ? 0 : parseInt(score.charAt(i - empty));
    elements[i].className = 'n-' + num;
  }
};

HTMLredraw.prototype.updateLossCount = function(data) {
  this.changeAttributesValue(['data-loss'], [data.loss]);
};

HTMLredraw.prototype.gameOver = function() {
  var msg = this.getMessage('Game Over </br> Press <b>R</b> to restart');

  this.messageWrap.show();
  this.messageWrap.appendChild(msg);
};

HTMLredraw.prototype.gameWin = function() {
  var msg = this.getMessage('We did it! It was already dark, and there was little time left to get out. I hear a helicopter, it seems somewhere nearby.</br><style>.iksweb{display: inline-block;cursor: pointer; font-size:15px;text-decoration:none;padding:8px 14px; color:#000000;background:#feb368;border-radius:14px;border:3px solid #354251;}</style><a class="iksweb" href="https://twitter.com/intent/tweet?text=Mission%20Complete%21%20Jose%20has%20been%20found%20and%20asks%20for%20help%20to%20restore%20balance%20to%20%40PlayLastRemains%0A%0AFind%20Jose%20on%20the%20map%20and%20complete%20his%20tasks%3A%20%0ALRmap.fun" target="_blank">Share on X</a>    <a class="iksweb" href="https://lrmap.fun/extraction" target="_blank">Go to helicopter</a>');
  
  this.messageWrap.show();
  this.messageWrap.appendChild(msg);
};

HTMLredraw.prototype.getMessage = function(message) {
  var data = { h3: message};

  var wrap = document.createElement('div');
  for (var tag in data) {
    var elem = document.createElement(tag);
    elem.innerHTML = data[tag];
    wrap.appendChild(elem);
  }

  return wrap;
};

HTMLredraw.prototype.mobileVersion = function() {
  this.bodyWrap.className = 'is-mobile';
};
