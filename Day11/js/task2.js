var text = "Sondos"; //?string
var num = 16; //?number
var bool = false; //?boolean
var x; //?undefined
var y = null; //?null
var z = "Sondos" * 16; //? NaN

var grade = 99;
if (grade >= 90) {
  console.log(`Excellent`);
} else if (grade < 90 && grade >= 80) {
  console.log(`Good`);
} else if (grade < 80 && grade >= 70) {
  console.log(`Average`);
} else if (grade < 70 && grade >= 60) {
  console.log(`Pass`);
} else {
  console.log(`Fail`);
}
