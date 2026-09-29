var grade = [100, 95, 86, 45, 77, 99, 60]; //global scope
var res = "";
var i = 0;

// for (i ; i < grade.length; i++) {
//   if (grade[i] > 90) {
//     res += grade[i] + "\n";
//   }
// }
// console.log(`grade greater than 90 :  ${res}`);

// while (grade[i] >= 60) {
//   console.log(`you are successful with grade: ${grade[i]}`);
//   i++;
// }

// var grade2 = [45, 77, 99, 50]
// do {
//   console.log(`grade: ${grade2[i]}`);
//   i++;
// } while (grade2[i] >= 60);

// function CalAVG(grade1, grade2) {
//   return (grade1 + grade2) / 2;
// }
// console.log(CalAVG(90, 85));

// (function () {
//   var average = CalAVG(90, 85);
//   if (average >= 60) {
//     console.log(`pass`);
//   } else {
//     console.log(`fail`);
//   }
// })();

// let students = {
//   student1: {
//     name: "sondos",
//     grade: 99,
//   },
//   student2: {
//     name: "ahmed",
//     grade: 90,
//   },
//   student3: {
//     name: "ali",
//     grade: 60,
//   },
// };
// console.table(students)

var avg = (grade1, grade2) => (grade1 + grade2)/2;
console.log(avg(60,70))