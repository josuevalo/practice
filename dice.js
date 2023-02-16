const diceRoller = function () {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min);
}