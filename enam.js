// // Function
// // Declare function
// // greeting("Lian"); bisa dipanggil disini walaupun declare function nya dibawah

// function namaFunction() {
//   console.log("Hello World");
// }

// function greeting(name) {
//   console.log("Halo " + name);
// }

// function tambah(bebas) {
//   bebas = bebas * 2;
//   bebas = bebas + 2;
//   return bebas;
// }
// function tambahLagi(bebas) {
//   return bebas + 2;
// }

// // Parameter ada = : namanya default value
// var kurang = function (angkaLagi, satuLagi = 10) {
//   //   console.log(satuLagi);
//   console.log(angkaLagi - satuLagi);
// };

// // Invoke
// // greeting("Lian");
// // tambah("lian");
// // kurang(10);
// // kurang(10);
// // kurang(15);

// // console.log(5 + tambah(5) + tambahLagi(1));

// function ganjilGenap(num) {
//   if (num % 2 === 0) {
//     console.log("genap");
//   } else {
//     console.log("ganjil");
//   }
// }

// // ganjilGenap(1);
// // ganjilGenap(2);
// // ganjilGenap(3);
// // ganjilGenap(4);
// // ganjilGenap(5);

// // console.log("lian&eddy".split(""));

// function kotak(num) {
//   var output = "";
//   for (var i = 0; i < num; i++) {
//     for (var j = 0; j < num; j++) {
//       output += "*";
//     }
//     output += "\n";
//   }
//   return output;
// }

// console.log(kotak(3));

// function tambahDua(num) {
//   return num + 2;
// }
// function tambahTiga(num) {
//   return num + 3;
// }
// // console.log(tambah(4));

// var number = 7;
// console.log(tambahDua(5) + tambahTiga(5));

// function namaFunction(num1, num2) {
//   return num1^num2;
// }

// Parameter / argument
// data yang di proses oleh functionnya
// reusable code === function

// var hasil = "Hello";

// function tambah(num1, num2) {
//   var hasil = num1 + num2;
//   console.log(hasil);
//   return hasil;
// }
// console.log(hasil);
// console.log(tambah(2, 3));
// console.log(tambah(10, 2) + tambah(3, 6));

// function pangkat(x, y) {
//   if (y == 1) {
//     return x;
//   } else {
//     return (x = 3 * pangkat(x, y - 1));
//   }
// }

// pangkat(2,1) === 2
// pangkat(3,1) === 3
// pangkat(5,1) === 5
// pangkat(7,1) === 7
// console.log(pangkat(3, 2)); === 9
// console.log(pangkat(3, 3));

// function tambah(x) {
//   return x + tiga();
// }

// function tiga() {
//   return 5;
// }
// console.log(tambah(10));

// function tambahNama(nama) {
//   return nama + "Susilo";
// }

// console.log(tambahNama("Bambang"));
// function sayHello() {
//   console.log("Hello");
// }
// setTimeout(sayHello, 3000);
// setInterval(sayHello, 1000);

// function kaliDua(x, y) {
//   return v * z;
// }
// function tambah(x, y) {
//   return x + kaliDua(y, x);
// }

// console.log(tambah(5, 3));
// console.log(kaliDua(5, 3));

// function blender(bebas) {
//   return bebas.split("");
// }
// console.log(blender("Melon"));
// function ifGenap(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ifGenap(6));
