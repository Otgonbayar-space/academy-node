// CLI app - Node.js дээр BankAccount class
import readline from "readline";


// readline ашиглан хэрэглэгчээс оролт авах
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("❌ Хангалттай үлдэгдэл алга!");
        } else {
            this.balance -= amount;
        }
    }

    showBalance() {
        console.log(`💰 ${this.owner}-ийн үлдэгдэл: ${this.balance}`);
    }
}

// дарааллаар нь хэрэглэгчээс асуух функц
rl.question('NEREE HEL: ', (owner) => {
    rl.question('CHAMD HED BAIGAAN?: ', (initBal) => {
        const account = new BankAccount(owner, parseFloat(initBal));

        rl.question('HEDIIG NEMEH YM?: ', (dep) => {
            account.deposit(parseFloat(dep));

            rl.question('HEDIIG GARGAH YM?: ', (wit) => {
                account.withdraw(parseFloat(wit));
                account.showBalance();
                rl.close();
            });
        });
    });
});
