const tempConverter = function (value, cToF) {
  /* IMPLEMENT ME */
  // (32°C × 9/5) + 32 = 89.6°F
  // (32°F − 32) × 5/9 = 0°C

  let conversion = 0;
  if (typeof value !== "number") {
    conversion = NaN;
  } else if (cToF === true) {
    conversion = (value * 9) / 5 + 32;
  } else if (cToF !== true) {
    conversion = Math.round((((value - 32) * 5) / 9) * 10) / 10;
    console.log("conversion", conversion);
  }

  return conversion;
};
