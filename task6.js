let number123 = parseInt(prompt('Введите трехзначное число'));
let number3 = number123 % 10;
let number2 = ((number123 % 100) - number3)/10;
let number1 = (number123 - (number123 % 100)) / 100;

let sum = number1 + number2 + number3;

alert(sum % 2 === 0 ? 'Сумма цифр является четной' : 'Сумма цифр является нечетной');
alert(sum % 5 === 0 ? 'Сумма цифр кратна 5' : 'Сумма цифр не кратна 5');

let mult = number1 * number2 * number3;

if (mult > 100) {
    alert ('Произведение цифр числа больше 100');
} else if (mult < 100) {
    alert ('Произведение цифр числа меньше 100'); 
} else if (mult === 100) {
    alert('Произведение цифр числа равно 100');
}