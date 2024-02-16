import Character from './character.js';

test('Проверка ввода имени', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'lizi',
    type: 'Bowman',
  };

  const received = new Character('lizi', 'Bowman');

  expect(received).toEqual(expected);
});

test('Проверка длины имени < 2 символов', () => {
  expect(() => {
    const character = new Character('L', 'Bowman');
    character();
  }).toThrowError('Ошибка! Имя должно содержать от 2 до 10 символов.');
});

test('Проверка длины имени > 10 символов', () => {
  expect(() => {
    const character = new Character('LizzziiiBriziiii', 'Bowman');
    character();
  }).toThrowError('Ошибка! Имя должно содержать от 2 до 10 символов.');
});

test('Проверка типа', () => {
  expect(() => {
    const character = new Character('Lizi', 'Noliza');
    character();
  }).toThrowError('Данного класса не существует.');
});
