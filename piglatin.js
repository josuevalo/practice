const pigLatin = function (data) {
  let changed = "";
  for (let i = 0; i < data.length; i++) {
    changed += data[i];
  }
  return changed.slice(1) + changed.slice(0, 1) + "ay";
};
("use strict");
const args = process.argv.slice(2);
let piggy = [];
for (let j = 0; j < args.length; j++) {
  piggy.push(pigLatin(args[j]));
}
console.log(piggy.join(" "));
