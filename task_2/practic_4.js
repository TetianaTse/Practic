// 4

let a = 1;
let maxValue = 15;

for (a; a <= 15; a++) {
  let sum = (a * (a + 1)) / 2;
  if (a === maxValue) {
    document.write("Сумма всех целых чисел от 1 до " + maxValue + " равна " + sum + "!");
  }
}
