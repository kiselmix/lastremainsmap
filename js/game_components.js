/*
 *  Grid
 */
function Grid(count) {
  this.count = count;
  this.list = {};

  this.avail = [];
  this.hold = [];

  this.init();
}

Grid.prototype.init = function() {
  for (var i = 0; i < this.count; i++) {
    var value = {};

    if(i%2 == 0) {
      value.x = (i > 0) ? 1 : 0;
      value.y = (i > 0) ? 1 : 0;
    } else {
      value.x = (i > this.count/2) ? 1 : 0;
      value.y = (i > this.count/2) ? 0 : 1;
    }

    this.avail.push(i);
    this.list[i] = value;
  }
};

Grid.prototype.onHold = function(key) {
  this.hold.push(key);
};

Grid.prototype.unHold = function(key) {
  var index = this.hold.indexOf(key);
  this.hold.splice(index, 1);
};


/*
 *  Heart
 */
function Heart(key, position) {
  this.key = key;
  this.x = position.x;
  this.y = position.y;

  this.gold = new Gold(this.key, 0);
}

/*
 *  Gold
 */
function Gold(heart, step, point) {
  this.heart = heart;
  this.step = step;
  this.point = point;
  this.amount = 9;

  this.callback;
  this.timer;
}

Gold.prototype.run = function(speed, callback) {
  this.callback = callback;

  var self = this;
  this.timer = setInterval(function() {
    self.nextStep();
  }, speed);
};

Gold.prototype.nextStep = function() {
  ++this.step;

  this.callback('updateGoldPosition', { gold: this.heart, position: this.step });

  if (this.step > this.amount) {
    clearInterval(this.timer);
    this.step = 0;
    this.callback('updateGoldPosition', { gold: this.heart, position: 0 });
    this.callback('unHoldHeart', { gold: this.heart });
    this.callback('updateScore', { gold: this.heart, point: this.point });
  }
};


/*
 *  Basket
 */
function Basket(position) {
  this.x = position.x;
  this.y = position.y;

  this.callback;
}

Basket.prototype.updatePosition = function (position, callback) {
  this.callback = callback;

  this.x = position.x;
  this.y = position.y;

  this.callback('updateBasketPosition', { x: this.x, y: this.y });
};
