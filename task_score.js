let introduction = 90,
  git = 269,
  js = 120;
let averageScore;
let studentFirstName = "Aleksandra",
  studentLastName = "Klimantova";

averageScore = (introduction + git + js) / 3;

console.log(
  `The average score of the student ${studentFirstName.slice(0, 1)}. ${studentLastName} is ${averageScore.toFixed(2)}`
);
