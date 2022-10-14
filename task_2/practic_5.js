// 5

let a = 15;
let mult = 1;
let maxValue = 35;

for (a; a <= 35; a++) {
  mult *= a;
  if (a === maxValue) {
    document.write("Произведение всех целых чисел от 15 до " + maxValue + " равно " + mult + "!");
  }
}
