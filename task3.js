let numberA = parseInt(prompt('Введите первое число'));
let numberB = parseInt(prompt('Введите второе число'));

alert(numberA%numberB === 0  ? 'Число B является делителем A' : 'Число B не является делителем A');
alert(numberB%numberA === 0  ? 'Число A является делителем B' : 'Число A не является делителем B');