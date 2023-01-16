const whatToDoForLunch = function (hungry, availableTime) {
  console.log("I don't know what to do!");
  if (hungry === true) {
    if (availableTime < 20) {
      console.log(
        "Pick something up and eat it back in the lab or the kitchen where you can get to know your fellow classmates."
      );
    } else if (availableTime >= 20 && availableTime < 30) {
      console.log("You deserve a break and you could try a place in Gastown.");
    } else if (availableTime > 30) {
      console.log(
        "Reminder: this is a bootcamp afterall and you should probably reconsider."
      );
    }
  } else console.log("Get back to work.");

  return;
};

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
