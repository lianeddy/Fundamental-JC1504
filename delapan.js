class BioData {
  constructor(a, b, c) {
    this.nama = a;
    this.usia = b;
    this.pekerjaan = c;
  }
}

class Alamat extends BioData {
  constructor(a, b, c) {
    super(a, b, c);
    this.alamat = "BSD";
  }
}

// var john = new Alamat("John", 50, "Hunter");
// console.log(john);

class Baru {
  constructor(bebas) {
    this.contoh = bebas;
    this.bool = true;
  }
}

class LebihBaru extends Baru {
  constructor(satu, dua) {
    super(dua);
    this.newData = "LebihBebas";
  }
}

var data = new LebihBaru("CONTOH", "BARU");
console.log(data);
