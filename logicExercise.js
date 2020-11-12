// Buat sebuah function yang menerima satu parameter (string)
// Function ini akan mereturn jumlah x dan o dalam bentuk string
// console.log(xo('xxxooo')) => "X : 3 | O : 3"
// console.log(xo('xrx3o1')) => "X : 2 | O : 1"
// console.log(xo('xXoOpP')) => "X : 2 | O : 2"

function xo(str) {
  var x = 0;
  var o = 0;
  str = str.toLowerCase();
  console.log(str);
  var split = str.split("");
  for (var i = 0; i < split.length; i++) {
    if (split[i] === "x") {
      x++;
    } else if (split[i] === "o") {
      o++;
    }
  }
  return `X : ${x} | O : ${o}`;
}
// console.log(xo("xxxooo"));
// console.log(xo("xrx3o1"));
// console.log(xo("xXoOpP"));

// Buat sebuah function yang menerima satu parameter (string)
// Function akan mengembalikan huruf tengah dari string nya
// console.log(tengah('Mobil')) => 'b'
// console.log(tengah('Komputer')) => 'pu'
// console.log(tengah('Mouse')) => 'u'
// console.log(tengah('Baju')) => 'aj'

function tengah(str) {
  var pisah = str.split("");
  console.log(pisah);
  if (pisah.length % 2 === 0) {
    return pisah[pisah.length / 2 - 1] + pisah[pisah.length / 2];
  } else {
    return pisah[(pisah.length - 1) / 2];
  }
}
// console.log(tengah("Baju"));

// Buat sebuah function yang menerima 2 parameter (string, number)
// Function akan mereturn string tersebut sebanyak angka di parameter kedua
// console.log(repeat('lian', 3)) => 'lianlianlian'
// console.log(repeat('bambang', 2)) => 'bambangbambang'
// console.log(repeat('susilo', 4)) => 'susilosusilosusilosusilo'

function repeat(str, num) {
  var output = str.repeat(num);
  // var output = "";
  // for (let i = 0; i < num; i++) {
  //   output += str;
  // }
  return output;
}

// console.log(repeat("lian", 3));
// console.log(repeat("bambang", 2));
// console.log(repeat("susilo", 4));

// Buat sebuah function yang menerima satu parameter (string)
// Function akan mengembalikan huruf pertama dan terakir dari string parameter
// console.log(firstLast("lian")) => "ln"
// console.log(firstLast("bambang")) => "bg"
// console.log(firstLast("susilo")) => "so"

function firstLast(str) {
  return str[0] + str[str.length - 1];
}

// console.log(firstLast("lian"));
// console.log(firstLast("bambang"));
// console.log(firstLast("susilo"));

// Buat sebuah function yang menerima satu parameter (string)
// Function akan mengembalikan string parameter tanpa huruf pertama dan terakir
// console.log(firstLast("lian")) => "ia"
// console.log(firstLast("bambang")) => "amban"
// console.log(firstLast("susilo")) => "usil"
function removeFirstLast(str) {
  var split = str.split(""); // ['l','i','a','n']
  split.shift(); // ['i','a','n'] hapus element pertama di sebuah array
  split.pop(); // ['i','a'] hapus element terakir di sebuah array
  return split.join(""); // 'ia' mengubah array menjadi string
}

// console.log(removeFirstLast("lian"));
// console.log(removeFirstLast("bambang"));
// console.log(removeFirstLast("susilo"));

// Buat sebuah function yang menerima sebuah string
// Function akan mengembalikan jumlah '?' di dalam string parameter dalam bentuk angka (number)
// console.log(questionMark('???')) => 3
// console.log(questionMark('?e?f?s?')) => 4
// console.log(questionMark('wex@!fs')) => "tidak ada tanda tanya"

function questionMark(str) {
  var q = 0;
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      q++;
    }
  }
  if (q === 0) {
    return "tidak ada tanda tanya";
  } else {
    return q;
  }
  // console.log("ini dibawah return");
}

// console.log(questionMark("???"));
// console.log(questionMark("?e?f?s?"));
// console.log(questionMark("wex@!fs"));

// Buat sebuah function yang menerima 4 argumen (semua number)
// arg1 adalah jumlah penduduk awal
// arg2 adalah brp persen penduduk yang mempunyai anak dalam setahun
// arg3 adalah jumlah pendatang baru
// arg4 adalah target
// Function akan mengembalikan jumlah tahun untuk populasi mencapai target
// console.log(berapaTahun(1000, 2, 50, 1200)) => 3
// console.log(berapaTahun(1500, 5, 100, 5000)) => 15
// console.log(berapaTahun(1500000, 2.5, 10000, 2000000)) => 10

function berapaTahun(pAwal, perc, pendatang, target) {
  var penduduk = pAwal;
  var tahun = 0;
  perc = perc / 100;

  for (var i = 0; ; i++) {
    if (penduduk < target) {
      penduduk += Math.floor(penduduk * perc) + pendatang;
      tahun++;
    } else if (penduduk > target) {
      break;
    }
    console.log(penduduk, i + 1);
  }
  return tahun;
}

// console.log(berapaTahun(1000, 2, 50, 1200));
// console.log(berapaTahun(1500, 5, 100, 5000));
// console.log(berapaTahun(1500000, 2.5, 10000, 2000000));

// Buat sebuah function yang menerima 2 argumen (array, array);
// Function akan mengembalikan nilai true apabila semua element di kedua array sama
// False jika tidak
// console.log(everyArr([1,2,3], [1,2,3])) => true
// console.log(everyArr([1,2,3], [4,5,6])) => false
// console.log(everyArr([1,2,3], [1,2])) => false

function everyArr(arr1, arr2) {
  var x = arr1.length > arr2.length ? arr1.length : arr2.length; // Ternary
  for (let i = 0; i < x; i++) {
    console.log(arr2[i]);
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// console.log(everyArr([1, 2, 3], [1, 2, 3]));
// console.log(everyArr([1, 2, 3], [4, 5, 6]));
// console.log(everyArr([1, 2, 3], [1, 2]));

// Buat sebuah function yang menerima satu parameter (arr)
// Function akan mengembalikan true apa bila semua element di dalam array memiliki value yang sama
// False jika tidak
// console.log(equal([1,1,1])) => true
// console.log(equal([2,2,2,2,2,2])) => true
// console.log(equal([2,2,2,2,2,'2'])) => false
// console.log(equal(['abc', 'abc', 'abc'])) => true

function equal(arr) {
  // return arr.filter((val) => val !== arr[0]).length === 0 ? true : false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(equal([1, 1, 1]));
console.log(equal([2, 2, 2, 2, 2, 2]));
console.log(equal(["2", "2", "2", "2", "2", "2"]));
console.log(equal(["abc", "abc", "abc"]));
