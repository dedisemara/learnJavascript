// 14-atm-machine
/*
In this assignment, your task is to make a program to simulate an ATM machine.

Create ten accounts in an array with id 0 to 9, each of the account has initial balance of $100. The system prompts the user to enter an id. If the id is entered incorrectly, ask the user to enter the correct id. Once id is accepted, the main menu is displayed as shown in the sample run. You can enter 1 for viewing the current balance, 2 for withdrawing money, 3 for depositing money, 4 for exiting the main menu. Once you exit, the system will prompt for an id again. Thus, once the system starts, it will not stop.

Enter an id: 4

Main menu
1: check balance
2: withdraw
3: deposit
4: exit
Enter a choice: 1
The balance is 100.0

Main menu
1: check balance
2: withdraw
3: deposit
4: exit
Enter a choice: 2
Enter an amount to withdraw: 3

Main menu
1: check balance
2: withdraw
3: deposit
4: exit
Enter a choice: 1
The balance is 97.0

Main menu
1: check balance
2: withdraw
3: deposit
4: exit
Enter a choice: 3
Enter an amount to deposit: 10

Main menu
1: check balance
2: withdraw
3: deposit
4: exit
Enter a choice: 1
The balance is 107.0

Main menu
1: check balance
2: withdraw
3: deposit
4: exit
Enter a choice: 4

Enter an id:
You are required to use object and array to finish this assignment.
*/

const readlineSync = require('readline-sync');

function Account(id, balance) {
    this.id = id;
    this.balance = balance;

    this.withdraw = function(amount) {
        this.balance -= amount;
    };

    this.deposit = function(amount) {
        this.balance += amount;
    };


}


function AccountManager() {
     this.accounts = [];

    /**
     * generate initial account.
     * @param {number} count Number of account to generate
     */

    this.generateInitialAccounts = function(count) {
        for (let i = 0; i < count; i++) {
            // const account = new accounts(i, 100);
            this.accounts.push(new Account(i, 100));
        }
    };

    /**
     * find account by the specified id
     * @param {int} id id of the account
     */
    this.findAccount = function(id) {
        for (const account of this.accounts) {
            if (account.id === id){
                return account;
            }
        }
    }
}

const Option = {
    CHECK_BALANCE: 1,
    WITHDRAW: 2,
    DEPOSIT: 3,
    EXIT:4,
};

function logMenu() {
    console.log(`Main menu
    1: check balance
    2: withdraw
    3: deposit
    4: exit
        `)
}

const accountManager = new AccountManager();
accountManager.generateInitialAccounts(10); 

while(true) {
    let account;

    while(true){
        const id = +readlineSync.question('enter an id: ');
        account = accountManager.findAccount(id)

        if (account) {
            break;
        }
        console.log(`Can't find an account with id of ${id}. Please enter the correct account id.`)
    }

    let exitMenu = false;

    while (!exitMenu) {
        logMenu();

        const option = +readlineSync.question('Enter a choice: ');
        switch (option){
            case Option.CHECK_BALANCE:
                console.log(`The balance is ${account.balance}`);
                break;
            case Option.WITHDRAW:
                const withdrawAmount = +readlineSync.question('Enter an amount to withdraw: ');
                account.withdraw(withdrawAmount);
                break;
            case Option.DEPOSIT:
                const depositAmount = +readlineSync.question('Enter an amount to deposit: ');
                account.deposit(depositAmount);
                break;
            case Option.EXIT:
                exitMenu = true;
                break;
        }
        console.log('');
    }
}
