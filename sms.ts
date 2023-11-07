#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    private name: string;
    private id: number;
    private balance: number;
    private course: string;

    constructor(name: string, id: number, balance: number, course: string) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.course = course;
    }

    viewBalance() {
       console.log(chalk.green(`Current Balance: ${this.balance}`))
    }

    payTuitionFees(fees: number) {
        this.balance = this.balance - fees;
    }

    studentStatus() {
        return chalk.green(`
            Name: ${this.name}
            Roll No: ${this.id}
            Balance: ${this.balance}
            Enrolled Course: ${this.course}
        `);
    }
}

let newStudent : any;

async function HandleInput() {
    // random roll no generated
    let studentRollNoGenerated = Math.floor(Math.random() * 90000) + 10000;

    let data = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.bold("Enter Your Name"),
        },
        {
            type: "input",
            name: "balance",
            message: chalk.bold("Enter Your Balance"),
        },
        {
            type: "list",
            name: "course",
            message: chalk.bold("Select The course you want to enroll"),
            choices: ['Javascript', 'Html', 'Css', 'Typescript', 'Node'],
        },
    ]);

    newStudent = new Student(data.name, studentRollNoGenerated, parseFloat(data.balance), data.course);
}

await HandleInput()

async function PerformOpertion(){

    let operations = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: chalk.bold("Select Your action you want to perform"),
            choices: ['Show Balance', 'Pay Tuition Fees', 'Show Status'],
        },
    ]);

    if (operations.action === "Show Balance") {
        newStudent.viewBalance();
    }

    if (operations.action === "Pay Tuition Fees") {
        let fees = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: chalk.bold("Enter The course fees"),
            },
        ]);
        newStudent.payTuitionFees(fees.amount);
        newStudent.viewBalance();
    }

    if (operations.action === "Show Status") {
        console.log(newStudent.studentStatus());
    }
}



async function AskQuestions() {
    let restart;
    do {
        await PerformOpertion();
        restart = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                message: "Another Action Want to Perfrom ?",
                choices: ['Yes', 'No'],
            },
        ]);
    } while (restart.restart === 'Yes');
}

AskQuestions();
