class Products {
  constructor(nama, harga, stock) {
    this.name = nama;
    this.price = harga;
    this.stock = stock;
  }
}

class FastFood extends Products {
  constructor(nama, harga, stock, expired) {
    super(nama, harga, stock);
    this.category = 1;
    this.expired = expired;
  }
}

var noodle = new FastFood("Noodle", 40000, 30, 2021);
console.log(noodle);
