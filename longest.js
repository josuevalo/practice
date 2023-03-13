const instructorWithLongestName = function (instructors) {
  var longestObject;
  for (i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestObject.name.length) {
      longestObject = instructors[i];
    }
  }
  return longestObject;
};
