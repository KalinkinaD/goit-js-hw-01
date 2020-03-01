const calculateEngravingPrice = function(message, pricePerWord) {
  let totalPrice = message.split(' ').length * pricePerWord;

  return `Цена гравировки всех слов -  ${totalPrice}`;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
