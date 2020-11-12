var angleClock = function (hour, minutes) {
  const a = ((hour + minutes / 60) % 12) * 30;
  const b = (minutes / 60) * 360;
  return Math.abs(b - a) > 180 ? 360 - Math.abs(b - a) : Math.abs(b - a);
};

console.log(angleClock((hour = 1), (minutes = 57)));
