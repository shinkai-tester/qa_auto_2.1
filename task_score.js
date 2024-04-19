let introduction = 90,
  git = 269,
  js = 120;
let averageScore;
let studentFirstName = "Sasha",
  studentLastName = "Klimantova";

averageScore = (introduction + git + js) / 3;

console.log(
  `The average score of the student ${studentFirstName} ${studentLastName} is ${averageScore.toFixed(2)}`
);
