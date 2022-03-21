class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        console.log("Error, deposit amount is negative");
      } else {
        this.#amount += amount;
      }
    } catch (err) {
      console.log("name:", err.name);
      console.log("message:", err.message);
      console.log("stack:", err.stack);
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0 || amount > this.#amount) {
        console.log("Error, witdraw amount is negative or over actual amount");
      } else {
        this.#amount -= amount;
      }
    } catch (err) {
      console.log("name:", err.name);
      console.log("message:", err.message);
      console.log("stack:", err.stack);
    }
  }

  view() {
    console.log("Actual bank amount: " + this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
