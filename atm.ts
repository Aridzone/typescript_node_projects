import inquirer from 'inquirer';
import chalk from 'chalk';

interface ATMInput {
    userId: string;
    userPin: number;
    accountType: 'Current' | 'Saving';
    transactionType: 'Fast Cash' | 'Withdraw';
    amount: number;
}

async function main() {
    const answers: ATMInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'userId',
            message: 'Kindly Enter your Id: '
        },
        {
            type: 'number',
            name: 'userPin',
            message: 'Kindly Enter your Pin: '
        },
        {
            type: 'list',
            name: 'accountType',
            choices: ['Current', 'Saving'],
            message: 'Select your account type: '
        },
        {
            type: 'list',
            name: 'transactionType',
            choices: ['Fast Cash', 'Withdraw'],
            message: 'Select your transaction',
            when(answers) {
                return answers.accountType === 'Current';
            },
        },
        {
            type: 'list',
            name: 'amount',
            choices: [1000, 2000, 5000, 10000, 20000],
            message: 'Select your amount',
            when(answers) {
                return answers.transactionType === 'Fast Cash';
            },
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter the amount you want to withdraw: ',
            when(answers) {
                return answers.transactionType === 'Withdraw';
            },
        }
    ]);

    // Simulating a balance check and transaction
    const balance = Math.floor(Math.random() * 10000000);
    console.log(chalk.green(`Current Balance: $${balance}`));

    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log(chalk.green(`Transaction Successful! Remaining Balance: $${remaining}`));
    } else {
        console.log(chalk.red('Insufficient Balance'));
    }
}

main();