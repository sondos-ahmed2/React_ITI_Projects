//# Part 1 - Choose
// ### 1) إيه اللي بيرجعه `map()` ؟
// - Array جديدة بنفس الطول

//### 2) مين فيهم بيرجع أول عنصر يحقق الشرط؟
//- find()

// ### 3) `filter()` بيرجع...
// -Array جديدة بالعناصر اللي حققت الشرط

// ### 4) `forEach()` بيرجع...
// -undefined

// ### 5) `for...of` بنستخدمها غالباً مع...
// - Arrays

// --------------------------------------------------------
// # Part 2 - True or False

// 1. False
// 2. True
// 3. True
// 4. True
// 5. False

// --------------------------------------------------------
//# Part 3 - Compelete the following

// const numbers = [1,2,3,4];
// numbers.map((num)=>{
//     console.log(num * 2);
// });

// const nums = [10,25,5,30,15,40];
// const result = nums.filter((num)=>{
//     return num > 20;
// });
// console.log(result);

// const users = [
//     {name:"Ali", age:20},
//     {name:"Sara", age:28},
//     {name:"Omar", age:30}
// ];
// const user = users.find((item)=>{
//     return item.age > 25;
// });
// console.log(user);

// const names = ["ali","mona","ahmed"];
// const result = names.map((name)=>{
//     return name.toUpperCase();
// });
// console.log(result);

// --------------------------------------------------------
//# Part 4 - To Do

//### 1)
// const fruits = ["Apple","Banana","Orange"];
// for (let fruit of fruits){
//     console.log(fruit)
// }
//### 2)
// const fruits = ["Apple","Banana","Orange"];
// for (let fruit in fruits){
//     console.log(fruit)
// }
//### 3)
// const fruits = ["Apple","Banana","Orange"];
// fruits.forEach((fruit , index) => {
// console.log(`${fruit} -> ${index}`)
// })
// --------------------------------------------------------
//# Part 5 - To Do
//## Q1
//let arrow = (a,b) => (a+b)
//## Q2
// const user = {
//     name:"Mostafa",
//     age:25
// };
// let {name ,age} = user
// console.log(name,age)
//## Q3
//console.log(`Hello, ${name}`);
//## Q4
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// let arr = [...arr1,...arr2]
// console.log(arr)

// --------------------------------------------------------
//# Part 6 - Many Q
// const students = [
//   { name: "Ali", degree: 70 },
//   { name: "Sara", degree: 95 },
//   { name: "Ahmed", degree: 40 },
//   { name: "Mona", degree: 85 },
//   { name: "Omar", degree: 55 },
// ];

//### 1)
// let names = students.map((student) => {
//   console.log(student.name);
// });
//### 2)
// let names = students.filter((student) => {
//     return student.degree >= 60
// }); console.log(names);
//### 3)
// let names = students.find((student) => {
//     return student.degree > 90
// }); console.log(names);
// ### 4)
// let names = students.forEach((student) => {
//   console.log(student.name);
// });

//# Bonus
// const numbers = [5, 10, 15, 20];
// const initialValue = 0;
// let total = numbers.reduce((sum, number) => sum + number, initialValue);

// console.log(total);
