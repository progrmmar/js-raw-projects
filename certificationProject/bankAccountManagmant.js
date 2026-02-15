class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than zero.";
        }

        this.balance += amount;
        this.transactions.push({
            type: "deposit",
            amount
        });
        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) {
            return "Insufficient balance or invalid amount.";
        }

        this.balance -= amount;
        this.transactions.push({
            type: "withdraw",
            amount
        });

        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    checkBalance() {
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits() {
        const depositedtransactions = this.transactions.filter(transaction => {
            return transaction.type === "deposit";
        });

        return `Deposits: ${depositedtransactions.map(transaction => transaction.amount).join(",")}`;
    }

    listAllWithdrawals() {
        const withdrawlstransactions = this.transactions.filter(transaction => {
            return transaction.type === "withdraw";
        });

        return `Withdrawals: ${withdrawlstransactions.map(transaction => transaction.amount).join(",")}`;
    }
}

const myAccount = new BankAccount();

const deposit1 = myAccount.deposit(100);
const deposit2 = myAccount.deposit(50);

// console.log(deposit1);
// console.log(deposit2);

const withdraw1 = myAccount.withdraw(20);
const withdraw2 = myAccount.withdraw(100);

// console.log(myAccount.listAllDeposits());
// console.log(myAccount.listAllWithdrawals());

const deposit3 = myAccount.deposit(500);
