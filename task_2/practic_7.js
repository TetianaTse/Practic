// 7
let sum = 0;

for(let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum+=i;
    }
}
document.write("Сумма только четных чисел в диапазоне от 30 до 80 равна " + sum + "!");