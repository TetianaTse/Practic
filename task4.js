let anyNumber = parseInt(prompt('Введите любое число'));
document.write(anyNumber % 2 === 0  ? 'Число заканчивается четной цифрой' : 'Число заканчивается нечетной цифрой');

lastDigit = anyNumber % 10;
alert('Последняя цифра ' + lastDigit);