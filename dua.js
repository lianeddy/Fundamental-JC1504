// var nama; // Declare Variable
// nama = "Lian";
// nama = "Bambang";
// nama = "Susilo";
// console.log(nama);

// var contoh = null;
// contoh = "Lian";

// console.log(nama);

// Var Let Const
// Let Const ES6  EcmaScript6

// Var bisa declare dengan nama yang sama
// var nama = "Lian";
// var nama = "Bambang";
// console.log(nama);

// Let bisa diganti valuenya tapi tidak dideclare dengan nama yang sama
// let nama;
// nama = "Susilo";
// console.log(nama);

// Const constant tidak boleh berubah
// const nama;
// const nama = "Lian";
// const nama = "Susilo";
// // nama = "Bambang";
// console.log(nama);

// var nama = "Firliandy Eddy";
// var exp = 5;
// var coder = true;
// var str = exp.toString();

// var str = "123"; // String
// var num = 5; // Number / Integer
// var boolean = false; // boolean
// var result = str + num; // string
// console.log(typeof str, ", ini tipe data str");
// console.log(typeof num, ", ini tipe data num");
// console.log(typeof result, ", ini tipe data result");
// console.log(typeof boolean, ", ini tipe data boolean");

// Camel Case
// console.log(result); // Number berubah jadi string
// console.log(parseInt(str)); // string menjadi number
// NaN = Not a number
// console.log(num + result);

// Arithmetic
// + Add
// - Subtract
// * Multiply
// / Divide
// % Modulus
// ++ Increment => +=number
// -- Decrement => -+number

// var num = 10;
// var str = "10";
// var result = parseInt(str);

// num+=12; // 10 + 1
// num++; // 11 + 1
// num++; // 12 + 1
// num--;
// num--;
// num--;
// console.log(num);

// console.log(num + result);
// console.log(num - result);
// console.log(num * result);
// console.log(9 / 2);
// console.log(9 % 2); // Hasil bagi / nilai sisa

// Math Object
// console.log(Math.PI);
// console.log(Math.abs(-23.34));
// console.log(Math.pow(5, 2));
// console.log(Math.sqrt(64));
// console.log(Math.cbrt(8));
// console.log(Math.round(4.7));
// console.log(Math.round(4.4));
// console.log(Math.floor(4.7)); // bulat kebawah
// console.log(Math.ceil(4.4)); // bulat ke atas

// Date Object
// var date = new Date("Tue, 20 Oct 2020 GMT -0700").toUTCString();
// date.
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());

// var x = 4;
// var y = 3;
// var z = 2;
// var w = Math.pow((x + y * z) / (x * y), z);
// console.log(w);

var days = 485;
var year = days / 360;
days = days % 360;
console.log(days);
var months = days / 30;
days = days % 30;
console.log(days);
var weeks = days / 7;
days = days % 7;
console.log(days);

console.log(Math.floor(year), "Tahun");
console.log(Math.floor(months), "Bulan");
console.log(Math.floor(weeks), "minggu");
console.log(days, "Hari");
