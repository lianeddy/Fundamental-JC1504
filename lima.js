// Array
// Element adalah satu data di dalam array
// Setiap element punya index masing-masing
// Index adalah urutan element di dalam array
// Index dimulai dari 0

// console.log(namaStorage.join(" * "));
// console.log(namaStorage[0].length);

// var panjangArr = namaStorage.length;
// console.log(panjangArr);

// for (var i = 0; i < panjangArr; i++) {
//   console.log(namaStorage[i]);
// }

// console.log(namaStorage.reverse());
// console.log(namaStorage.indexOf("Bambang"));

// Pop
// Menghilangkan data di index terakhir di dalam array
// namaStorage.pop();
// namaStorage.pop();

// Push
// Menambahkan element baru ke dalam array di urutan paling belakang
// namaStorage.push("Joko");
// console.log(namaStorage);

// console.log(namaStorage[0]);
// Shift
// Menghilangkan data di index pertama di dalam array
// namaStorage.shift();

// Unshift
// Menambahkan element baru ke dalam array di urutan pertama
// namaStorage.unshift("Joko");
// console.log(namaStorage);

// var nama = "Lian";
// var namaStorage = [
//   nama,
//   "Bambang",
//   "Susilo",
//   nama,
//   "Bambang",
//   "Susilo",
//   nama,
//   "Bambang",
//   "Susilo",
//   nama,
//   "Bambang",
//   "Susilo",
// ];
// Splice
// namaStorage.splice(1, 2); // Hapus (angka kedua) item di index (angka pertama), lalu menambahkan data baru di posisi (angka pertama)
// namaStorage.splice(1, 1);
// namaStorage.splice(3, 1);
// namaStorage.splice(5, 1);
// namaStorage.splice(7, 1);

// for (var i = 1; i <= namaStorage.length; i += 2) {
//   namaStorage.splice(i, 1);
// }

// console.log(namaStorage);

// Slice
// Ambil sebagian dari array
// Mulai dari angka pertama sampai angka kedua (element di angka kedua tidak ikut diambil)
// var namaStorage = [
//   "Lian",
//   "Bambang",
//   "Susilo",
//   "Joko",
//   "Adhi",
//   "Bayu",
//   "Derick",
// ];
// console.log(namaStorage.slice(2));
// console.log(namaStorage.slice(2, 7));

// Adding New Elements
// Push
// Unshift
// Manual
// buah.push("Duren"); // Tambah di belakang
// buah.unshift("Rambutan"); // Tambah di depan

// buah[5] = "Papaya";
// buah[6] = "Kiwi";
// buah[0] = "Pear";
// buah[0] = "Salak";

// buah[3] = "Pisang";
// buah[buah.length] = "Pisang";
// console.log(buah);

var buah1 = ["Apel", "Mangga", "Jeruk"];
var buah2 = ["Duren", "Kiwi", "Rambutan"];

// var buahGabung = buah1.concat(buah2);
// console.log(buahGabung);
// Array 2D
var buah3 = [
  ["Apel", "Mangga", "Jeruk", [true, false]],
  ["Duren", "Kiwi", "Rambutan"],
];
console.log(buah3[0][3][0]);

buah1[4] = "duren";

console.log(buah1);
