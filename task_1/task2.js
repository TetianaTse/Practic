let s1 = parseInt (prompt('Введите расстояниек в км'));
let s2 = parseInt (prompt('Введите расстояние в футах'));

s1 = s1 * 1000;
s2 = s2 * 0.305;


if (s1 > s2) {
    document.write('Расстояние в км больше, чем в футах');
} else if (s1 < s2) {
    document.write('Расстояние в футах больше, чем в км');
} else if (s1 === s2) {
    document.write('Расстояния одинаковы');
}