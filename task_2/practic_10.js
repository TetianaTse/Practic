let a;
let b;
let message;

document.write("Таблица умножения:<br>");
for (a = 1; a <= 10; a++) {
    for (b = 1; b <= 10; b++) {
        message = a + ' * ' + b + ' = ';
        document.write(message + (a*b) + '<br>');
    }
    document.write('<br>');
}