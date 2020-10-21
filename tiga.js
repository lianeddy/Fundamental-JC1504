// Condition
// True or False = Boolean

// Comparison Operator
// Boolean
// = X nono ini untuk declare variable
// == nilai sama walaupun tipe data berbeda masih true eg. number & string
// === nilai dan tipe data harus sama
// tidak sama dengan !=
// > lebih besat dari
// < lebih kecil
// >= lebih besar atau sama dengan
// <= lebih kecil atau sama dengan

// var x = 5;
// var y = "5";

// var nama = "Lian";
// console.log(4 !== 4);

// Logical Operator
// && and / dan
// || or / atau
// ! not / reverse logic

// Not !
// console.log(!false); hasilnya true
// console.log(!true); hasilnya false

// And &&
// dua dua harus true
// jika tidak dia hasilnya false
// console.log(5 == "5" && 4 > 9);

// OR ||
// salah satu untuk jadi true
// console.log(!(!false || !true));

// Conditional Statements
// if
// else if
// else tidak ditulis kondisi

// var nilai = 30;
// console.log(nilai < 70 && nilai > 40); // false
// if (nilai > 70) {
//   console.log("WOW");
// } else if (nilai < 70 && nilai > 40) {
//   console.log("nooo");
// } else {
//   console.log("belajar");
// }

// Diatas 8 strong
// 4 dan dibawah 8 medium
// dibawah 4 weak

// var password = "af";

// if (password.length > 8) {
//   console.log("strong", password.length);
// } else if (password.length >= 4 && password.length <= 8) {
//   console.log("medium", password.length);
// } else {
//   console.log("weak", password.length);
// }

// Condition tanpa comparison dan boolean
// false null undefined "" 0
// sisanya true
// var nilai = 1;
// if (nilai) {
//   console.log("always true");
// } else {
//   console.log(false);
// }

// Switch Case
var job = "guru";
switch (job) {
  case "dokter":
    console.log("rumah sakit");
    break;
  case "polisi":
    console.log("ninuninu");
    break;
  case "guru":
    console.log("sekolah");
    break;
  default:
    console.log("beda");
}
