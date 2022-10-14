// 3

let a;

document.write("Таблица умножения на 7:<br>");
for (a = 1; a <= 10; a++) {
  let message = "7 * " + a + " = ";
  if (a === 10) {
    document.write(message + a * 7 + ".<br>");
  } else {
    document.write(message + a * 7 + ";<br>");
  }
}
