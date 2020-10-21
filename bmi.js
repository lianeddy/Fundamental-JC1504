var kg = 90;
var height = 1.76;

var bmi = kg / Math.pow(height, 2);
console.log(bmi);

if (bmi < 18.5) {
  console.log("berat badan kurang");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("berat badan ideal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("berat badan berlebih");
} else if (bmi >= 30 && bmi <= 39.9) {
  console.log("berat badan sangat berlebih");
} else {
  console.log("berat badan obese");
}
