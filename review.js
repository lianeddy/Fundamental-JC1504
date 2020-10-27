// Variabel
// Data Type
// Logic If Switch
// Loop
// Array

// Variabel tempat simpan data
// var var bisa ditiban nilainya, bisa dideclare lebih dari sekali
// let bisa ditiban, tidak bisa dideclare lagi
// const sama sekali tidak bisa diganti

// String 'asdasd123213*^&*^'
// Number 123123123 bisa di math
// Undefined
// Null
// Boolean
// Array [123,qwe,qwe,123,wqe,foo, bar]
// NaN Not a number

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr[arr.length - 1]);
// > < >= <= || && return boolean true / false

// Condition
// if else if else
// if(){}
// else if(){}
// else {}

//if selalu dibaca
//if
//if

// Loop
// selalu ada kondisi
// boolean || logic / comparison operator
// while
// do while
// for

// while (true) {
//   console.log("Hello");
// }
// do {
//   console.log("Hello");
// } while (false);
// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// var output = "";
// for (var j = 0; j < 5; j++) {
//   for (var i = 0; i < 5; i++) {
//     output += "*";
//   }
//   output += "\n";
// }
// console.log(output);

// var output = "";
// for (var i = 0; i < 5; i++) {
//   for (var j = 5; j > i; j--) {
//     output += " ";
//   }
//   for (var k = 0; k <= i; k++) {
//     output += "*";
//   }
//   for (var l = 0; l < i; l++) {
//     output += "*";
//   }
//   if (i !== 5) {
//     output += "\n";
//   }
// }
// console.log(output);

var fruit = ["Apel", "Jeruk", "Mangga"];
for (var i = 0; i < fruit.length; i++) {
  console.log(i + 1, fruit[i]);
}
