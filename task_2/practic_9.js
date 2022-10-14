// 9

let number;
let div;

do {
    number = parseInt(prompt('Введите любое натуральное число:'));
 } while(number === 0);

document.write('Делителями числа ' + number + ' являются: ');

for (div = 1; div <= number; div++) {
    if (number % div === 0) {
      document.write(div + "; ");
    } 
  } 

document.write(' Количество четных делителей числа ' + number + ': ');
let amount = 0;
for (div = 1; div <= number; div++) {
    if (number % div === 0) {
      if (div % 2 === 0) {
        amount += 1;
      }
    } 
  }
document.write(amount + '. ');

document.write('Сумма четных делителей числа ' + number + ': ');
let sum = 0;
for (div = 1; div <= number; div++) {
    if (number % div === 0) {
      if (div % 2 === 0) {
        sum+=div;
      }
    } 
  }
document.write(sum + '. ');
