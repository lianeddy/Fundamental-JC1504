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
// var arr = [1, 2, 3];
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

// var arr = [1, 2, 3];
// function mapManual(arr, func) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(func(arr[i]));
//   }
//   return newArr;
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
// // console.log(newArrAuto);
// console.log(mapManual(arr, bagiDua));

// var date = new Date();
// var id = date.getTime();
// console.log(id);

// arrProduct.push({
//   id: date.getTime(),
//   name: newname,
// });

// var nama = "bambang";
// console.log(nama.includes("mb"));

// find
// findIndex

// var arrProduct = [
//   {
//     id: 15945893849,
//     category: "Fast Food",
//     name: "Noodle",
//     price: 5000,
//     stock: 9,
//   },
//   {
//     id: 15945893843,
//     category: "Electronic",
//     name: "Headphone",
//     price: 500000,
//     stock: 10,
//   },
//   {
//     id: 15945893844,
//     category: "Clothing",
//     name: "Hoodie",
//     price: 300000,
//     stock: 7,
//   },
//   { id: 15945893845, category: "Fruit", name: "Apple", price: 10000, stock: 8 },
// ];

// console.log(
//   arrProduct.find((val) => {
//     return val.id === 15945893843;
//   })
// );

// console.log(
//   arrProduct.findIndex((val) => {
//     return val.id === 15945893843;
//   })
// );
// Kondisi cart
// If product sudah ada di dalam cart kita hanya tambah qty
// else kita push product ke dalam arr cart

// kalo kita buat kondisi dan didalam kondisi nya ada nama variabel
// apa bila variable mempunyai nilai (ada isinya) kondisi terhitung true
// jika isi variabel kosong atau (NaN, null, undefined), maka kondisi terhitung false
// var nama = ["asd"];
// if (!nama) {
//   console.log("Hello");
// }

// Spread operatpr
// var arr = [1, 2, 3];
// var arr2 = [...arr, 4, 5, 6];
//[1,2,3,4,5,6]
// // console.log(arr2);

// var obje = {
//   nama: "Bambang",
//   usia: 45,
// };

// var selectedProduct = {
//   id: 15945893845,
//   category: "Fruit",
//   name: "Apple",
//   price: 10000,
//   stock: 8,
// };

// var cart = [];
// cart.push({ nama: "appel", harga: 10000 });
// cart.push({ ...obje, alamat: "bekasi", nikah: true });
// console.log(cart);

// var arr = [
//   { nama: "lian", job: "coder" },
//   { nama: "bambang", job: "karyawan" },
//   { nama: "susilo", job: "pns" },
// ];

// var selectedFind = arr.find((val) => {
//   return val.nama === "joko";
// });

// console.log(selectedFind);

// if (selectedFind) {
//   console.log("ada");
// } else {
//   console.log("tidak ada");
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arrNew = arr.map((val) => {
//   if (val % 2 === 0) {
//     return val * 2;
//   } else {
//     return val / 2;
//   }
// });

// var newArr = [];
// for (let i = 0; i < array.length; i++) {
//   if (i === 5) {
//     newArr.push(arr[i] * 2);
//   } else {
//     newArr.push(arr[i] / 2);
//   }
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var newArr = arr.map((val, index) => {
//   if (index === 0) {
//     console.log(val, "di index ke - ", index);
//   }
// });
// console.log(newArr);

// Val
// Map & Filter Looping
// var arr = [1, 2, 3];
// var otherArr = [4, 5, 6];

// var newArr = arr.map((val) => val * 2);
// var newArr = arr.filter((val) => val > 1);
// console.log(newArr);

// function ret(num) {
//   if (num > 5) {
//     return "number diatas 5";
//     console.log("ini dibawah return string");
//   }
//   return false;
//   return true;
//   console.log("ini dibawah return false");
// }

// console.log(ret(1));

// Ternary If
// one line if else
// if(condition){
//   // code here
// }else{
//   //code here
// }

var x = 5;
var y = 1;

// var contoh = y > x ? true : false;
// console.log(contoh);

var contoh;
if (y > x) {
  contoh = true;
} else {
  contoh = false;
}

// console.log(
//   y > x ? "angka y lebih besar dari x" : "angka y lebih kecil dari angka x"
// );

// if (y > x) {
//   console.log("angka y lebih besar dari x");
// } else {
//   console.log("angka y lebih kecil dari angka x");
// }

var nama = "lian";
var nama2 = `lian`;

// var intro = "nama saya " + nama + " eddy";
var intro = `nama saya ${nama} eddy`;
var intro = `nama saya nama eddy`;

console.log(intro);
