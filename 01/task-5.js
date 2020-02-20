let UserChoise = prompt('В какую страну требуется доставка?');
let message;
let price;

if (UserChoise === null) {
  message = 'Очень жаль, приходи еще!';
} else {
  UserChoise.toLowerCase();
  switch (UserChoise) {
    case 'китай':
      UserChoise = 'Китай';
      message = 'Доставка в Китай будет стоить 100 кредитов';
      break;

    case 'чили':
      UserChoise = 'Чили';
      message = 'Доставка в Чили будет стоить 250 кредитов';
      break;

    case 'австралия':
      UserChoise = 'Австралия';
      message = 'Доставка в Австралию будет стоить 170 кредитов';
      break;

    case 'индия':
      UserChoise = 'Индия';
      message = 'Доставка в Индию будет стоить 80 кредитов';
      break;

    case 'ямайка':
      UserChoise = 'Ямайка';
      message = 'Доставка в Ямайку будет стоить 120 кредитов';
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
console.log(message);
