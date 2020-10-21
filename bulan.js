var date = new Date();
var month = date.getMonth(); // 0-11
console.log(month);

switch (month) {
  case 0:
    console.log("Januari");
    break;
  case 1:
    console.log("Februari");
    break;
  case 2:
    console.log("Maret");
    break;
  case 3:
    console.log("April");
    break;
  case 4:
    console.log("Mei");
    break;
  case 5:
    console.log("Juni");
    break;
  case 6:
    console.log("Juli");
    break;
  case 7:
    console.log("Agustus");
    break;
  case 8:
    console.log("September");
    break;
  case 9:
    console.log("October");
    break;
  case 10:
    console.log("November");
    break;
  case 11:
    console.log("December");
    break;
  default:
    console.log("error");
}
