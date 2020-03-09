'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance = amount + this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      let transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance = this.balance - amount;
    } else {
      console.log('Недостаточно средств, снятие такой суммы невозможно:(');
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    return total;
  },
};

account.deposit(200);
account.deposit(40);
account.withdraw(400);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
