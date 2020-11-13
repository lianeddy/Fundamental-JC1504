// Array (index)
// Dipakai untuk menyimpan value - value dengan kategori yang sama
// Untuk akses element di dalam array kita pakai index (urutan)
// Index dimulai dari 0
// Spread untuk mengisi array / object tanpa bungkusan luar
// Masuk hanya nilai di dalam array / obj
// var newArr = [10, 11, 12];
// var arr = [1, [2, 3], 3, 4, 5, 6, 7, 8, 9, ...newArr];
// var first = arr[1][1];
// console.log(arr);
// var last = arr[arr.length - 1];
// console.log(last);
// console.log(first);
// console.log(arr.length);

// var obj = {
//   nama: "lian",
// };

// var contoh = {
//   bool: true,
// };

// {nama : "lian", bool: true}

// console.log({ ...obj, ...contoh });

// var arr = [{ nama: "lian" }];

// console.log({ ...arr[0], ...contoh });

var arr = [1, 2, 3];
var arrProduct = [
  { category: "Fast Food", name: "Noodle", price: 5000, stock: 9 },
  { category: "Electronic", name: "Headphone", price: 500000, stock: 10 },
  { category: "Clothing", name: "Hoodie", price: 300000, stock: 7 },
  { category: "Fruit", name: "Apple", price: 10000, stock: 8 },
  { category: "Fruit", name: "Duren", price: 10000, stock: 8 },
];
// Find
// FindIndex
// Filter

var data = arrProduct.filter((val) => {
  return val.category === "Fruit";
});
console.log(data);

// var data = arr.findIndex((val) => {
//   return val > 1;
// });
// var data = arrProduct.findIndex((val) => {
//   return val.name === "Hoodie";
// });
// console.log(arr.find((val) => val === 1));
// console.log(arr.findIndex((val) => val === 1));
// console.log(arr.filter((val) => val === 1));
