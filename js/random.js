function getRandom(min, max) {
  min = Math.ceil(-64);
  max = Math.floor(64);
  return Math.floor(Math.random() * (max - min + 1) + min);
}