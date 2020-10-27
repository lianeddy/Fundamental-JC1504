// Object
// Property dan Value
// Property === nama dari index
// Value === nilai yang disimpan

// console.log(bioData.laptop.ram[1]);

// var toko = {
//   barisanBuah: [
//     "Apel",
//     "Mangga",
//     [
//       { nama: "monthong", harga: 4000 },
//       { nama: "musanking", harga: 500000 },
//     ],
//   ],
//   barisanDaging: ["ayam", "sapi", "kambing"],
//   barisanSnack: ["taro", "cheetos", "chitato"],
// };

// console.log(toko.barisanBuah[2][1].harga);

// Method
// sebuah function di dalam object
// var namaBelakang;
// var bioData = {
//   nama: "Lian",
//   namaBelakang: "Eddy",
//   password: "zxczxc123",
//   noTelefon: ["+628123123123", "08123123123"],
//   laptop: {
//     manufacturer: "Asus",
//     type: "zenbook",
//     ram: ["4gb", "6gb"],
//   },
//   namaFull: function () {
//     return this.nama + " " + this.namaBelakang;
//   },
// };
// bioData.alamat = ["BSD", "Bekasi"];
// delete bioData.password;
// bioData.noTelefon.push("1239128398123");
// bioData.noTelefon[0] = "123";
// bioData.noTelefon.splice(1, 1);
// console.log(bioData.namaFull());

// var john = new Object();
// john.name = "John";
// console.log(john);

// Class
// Cetakan Object
// Selalu membuat object dengan property yang sama

class bioData {
  constructor(nama, namaBelakang, usia, pekerjaan) {
    this.namaDepan = nama;
    this.lastName = namaBelakang;
    this.usia = usia;
    this.okupasi = pekerjaan;
    this.fullName = function () {
      return this.namaDepan + " " + this.lastName;
    };
  }
}

var john = new bioData("John", "Wick", 50, "Hunter");
console.log(john.namaBelakang);
