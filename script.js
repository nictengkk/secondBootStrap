// Q1
//var isEven = x => {
//   return x % 2 === 0}:

// console.log(isEven(7));

// var factorial = x => {
//   if (x < 0) return;
//   if (x === 0) return 1;
//   return x * factorial(x - 1);
// };

// console.log(factorial(3));

// Q2
//let str = "Dogs-are-awesome";

// var kebabToString = x => {
//   let stringg = x.replace(/-/g, "_");
//   return stringg;
//   //   let array = x.split("");
//   //   console.log(array);
// };

// console.log(kebabToString(str));

//TODAY

// Q3
//let array = [1, 2, 3, 4];
// let arrayy = ["a", "b", "c"];

// var printReverse = x => {
//   var reversed = x.reverse();
//   reversed.forEach(element => {
//     console.log(element);
//   });
// };

// console.log(printReverse(arrayy));

//Q4
// let num = [1, 1, 1, 1, 2, 1, 1, 1];
// let numm = [1, 1, 1, 1, 1, 1, 1, 1];

// var isUniform = arr => {
//   const sortedArray = arr.sort();
//   return sortedArray[0] === sortedArray[sortedArray.length - 1] ? true : false;
// };

// console.log(isUniform(num));

//Q5
// let arr = [-5, 100];

// var sumArray = arr => {
//   let count = 0;
//   arr.forEach(element => {
//     count += element;
//   });
//   return count;
// };

// console.log(sumArray(arr));

//Q6
// let array = [-30, -62, 35, 42, 58];

// var max = arr => {
//   let newArray = arr.sort();
//   return newArray[newArray.length - 1];
// };

// console.log(max(array));

// Q7
// var movies = [
//   { title: "Pulp Fiction", rating: 5, hasWatched: true },
//   { title: "Fight Club", rating: 3, hasWatched: false }
// ];

// var review = movies.forEach(element => {
//   var result = "You have ";
//   if (element.hasWatched) {
//     result += "watched ";
//   } else {
//     result += "not seen ";
//   }
//   result += '"' + element.title + '"' + " - ";
//   result += element.rating + " stars.";
//   console.log(result);
// });
