const ADMIN_PASSWORD = 'jqueryismyjam';

const password = prompt('your password');
let message;
if (password === null) {
  console.log('Отменено пользователем!');
} else if (password === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}
