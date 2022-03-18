class BankAccount {
  constructor(current_amount) {
    this.current_amount = current_amount;
  }
  deposit(money) {
    console.log((this.current_amount += money));
  }
  withdraw(money) {
    console.log((this.current_amount -= money));
  }
  view() {
    console.log(this.current_amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
