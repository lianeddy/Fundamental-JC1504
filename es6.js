// Parameter function adalah sebuah function
// function parameter namanya callback

// Map
// Membuat array baru bedasarkan isi dari array yang diberikan
// var arr = [1, 2, 3];
// var newArr = arr.map(function (val) {
//   //   console.log(val);
//   return val * 2;
// });

// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   newArr.push(arr[i] * 2);
// }
// console.log(newArr);

// Filter
// Anonymous
// var newArr = arr.filter(function (val) {
//   return val % 2 === 0;
// });
// console.log(newArr);

// var arrayNumber = [1, 2, 3, 4, 5, 6];
// function filterManual(arr, func) {
//   var newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filterManual(arrayNumber, genapkah));
// function genapkah(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function ganjilkah(num) {
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(ganjilkah(2));
// console.log(filterManual(arrayNumber, ganjilkah));

// function contoh(param) {
//   return param();
// }

// console.log(contoh());

// func === function
// function contoh(num, func) {
//   return num + func(num);
// }

// function kaliDua(num) {
//   return num * 2;
// }
// function kaliTiga(num) {
//   return num * 3;
// }
// function bagiDua(num) {
//   return num / 2;
// }
// console.log(contoh(5, bagiDua));
// console.log(kaliTiga(2));

// Arrow Function
// let pi = () => 3.14;
// function pi() {
//   console.log(3.14);
// }
// console.log(pi());

// let x = (nama) => {
//   return `nama saya ${nama}`;
// };

// console.log(x("lian"));

// console.log(kaliDua(5));

// function kaliDua(num) {
//   return num * 2;
// }

// let kaliDua = (num) => {
//   return num * 2;
// };

// var newArrAuto = arr.map((val) => {
//   return val * 2;
// });

// Function mapManual menerima dua paramter
// Pertama Array
// Kedua CallBack
// Tujuan dari function sama seperti .map

var arr = [1, 2, 3];
function mapManual(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function kaliDua(num) {
  return num * 2;
}
function kaliTiga(num) {
  return num * 3;
}
function bagiDua(num) {
  return num / 2;
}
// console.log(newArrAuto);
console.log(mapManual(arr, bagiDua));
