const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin Alert!";
    }
  }
  return "All good!";
};

// // TEST CODE //
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

/*

EXPECTED OUTPUT
Raisin alert!
Raisin alert!
All good!

*/

const raisinAlarmArray = function (cookies) {
  let alert = [];
  for (let i = 0; i < cookies.length; i++) {
    let raisinAlert = false;
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        raisinAlert = true;
      }
    }
    if (raisinAlert) {
      alert.push("Raisin Alert!");
    } else {
      alert.push("All good!");
    }
  }

  return alert;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍇", "🍫"],
  ])
);

/*

EXPECTED OUTPUT
["Raisin alert!", "Raisin alert!", "All good!"]

*/
