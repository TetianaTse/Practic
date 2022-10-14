let number123 = parseInt(prompt('Введите трехзначное число'));
let number3 = number123 % 10;
let number2 = ((number123 % 100) - number3)/10;
let number1 = (number123 - (number123 % 100)) / 100;

if (number1 === number2 && number1 === number3) {
    alert('Все цифры одинаковые');
} else if (number1 === number2) {
    alert('Первая и вторая цифры совпадают');
} else if (number2 === number3) {
    alert('Вторая и третья цифры совпадают');
} else if (number1 === number3) {
    alert('Первая и третья цифры совпадают');
} else {
    alert('Все цифры не совпадают'); 
}

