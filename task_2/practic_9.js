// 9

let number;
let div;
let sum = 0;
let amount = 0;

do {
    number = parseInt(prompt('Введите любое натуральное число:'));
 } while(number === 0);

document.write('Делителями числа ' + number + ' являются: ');

for (div = 1; div <= number; div++) {
    if (number % div === 0) {
      document.write(div + "; ");
      if (div % 2 === 0) {
        amount += 1;
        sum+=div; 
      }
    } 
  } 
document.write('<br>Количество четных делителей числа ' + number + ': ' + amount + '.<br>');
document.write('Сумма четных делителей числа ' + number + ': ' + sum + '. ');
