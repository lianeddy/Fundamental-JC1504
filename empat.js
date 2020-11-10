var angka = 0; //1 //2
var loop = true;

// While
// while (false) {
// Cek kondisi di awal
//   console.log(angka, "while aja");
//   angka++;
//   if (angka === 5) {
//     loop = false;
//   }
// }

// Do While
// do {
// cek kondisi setelah jalan sekali
// eg. mesin atm
//   console.log(angka, "do while");
//   angka++;
// kondisi dibawah
// } while (angka < 10);

// For
var angka;

// for (angka = 1; angka <= 30; angka++) {
//   if (angka % 2 === 0) {
//     console.log("GENAP", angka);
//   } else {
//     console.log("GANJIL", angka);
//   }
// }

// for (angka = 0; angka <= 30; angka += 2) {
//   console.log(angka);
// }

// Garis Horizontal
// var output = "";
// for (var i = 0; i < 5; i++) {
//   output += "*";
//   console.log(output);
// }

// Garis Vertical
// for (var i = 0; i < 5; i++) {
//   output += "* \n";
// }
// console.log(output);

// Square
for (var j = 0; j < 5; j++) {
  for (var i = 0; i < 4; i++) {
    output = output + "*";
  }
  output += "\n";
}

// console.log(output);

var output = "";

for (var i = 1; i < 5; i++) {
  for (var j = 0; i > j; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);

//comment
