let number123456 = parseInt(prompt('Введите шестизначное число'));

let number6 = number123456 % 10;
let number5 = ((number123456 % 100) - number6)/10;
let number4 = ((number123456 % 1000) - (number123456 % 100))/100;
let number3 = ((number123456 % 10000) - (number123456 % 1000))/1000;
let number2 = ((number123456 % 100000) - (number123456 % 10000))/10000;
let number1 = ((number123456 % 1000000) - (number123456 % 100000))/ 100000;


if (number1 === number6 && number2 === number5 && number3 === number4) {
    alert('Заданное шестизначное число является зеркальным');
} else {
    alert('Заданное шестизначное число не является зеркальным');
}