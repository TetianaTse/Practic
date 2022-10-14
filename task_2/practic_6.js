// 5

let a = 1;
let sum = 0;
let mid;
let maxValue = 500;

for (a; a <= 500; a++) {
    sum+=a;
    mid = sum/maxValue;
  if (a === maxValue) {
    document.write("Среднее арифметическое всех целых чисел от 1 до 500" + " равно " + mid + "!");
  }
}