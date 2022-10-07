let numberAB = parseInt(prompt('Введите двузначное число'));
let digitB = numberAB%10; 
let digitA = (numberAB - digitB) / 10;

if (digitA > digitB) {
    document.write ('Первая цифра числа больше');
} else if (digitA < digitB) {
    document.write ('Вторая цифра числа больше'); 
} else if (digitA === digitB) {
    document.write('Цифры равны');
}