const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt('How many Droids do you want to buy?');
const totalPrice = numberOfDroids * pricePerDroid;
const balance = credits - totalPrice;
if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${balance} кредитов.`,
  );
}
