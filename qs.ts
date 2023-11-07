#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// How do you reverse a string in Javascript ?

async function QuizStart(){

    console.log(chalk.green.bold("Javascript Quiz 1"))

    let totalMarks: number = 4;
    let gainMarks: number = 0;

    const quiz = await inquirer.prompt([

        {
            type: "input",
            name: "username",
            message: chalk.green("Enter Your Name :"),
        },


        {
            type: "list",
            name: "q1",
            message: chalk.green("The external JavaScript file must contain the <script> tag."),
            choices: ['TRUE', 'FALSE']
        },

        { 
            type: "list",
            name: "q2",
            message: chalk.green("How to write an IF statement for executing some code if i is NOT equal to 5? "),
            choices: ['if (i !=5)', 'if i =! 5', 'None of Them']  
        },

        { 
            type: "list",
            name: "q3",
            message: chalk.green("How do you round the number 7.25, to the nearest integer? "),
            choices: ['Math.round()', 'Math.random()', 'None of Them']  
        },

        { 
            type: "list",
            name: "q4",
            message: chalk.green("How do you reverse a string? "),
            choices: ['split method', 'spread operator' ,'reverse method', 'None of Them' ]  
        },

    ])


    if (quiz.q1 === "FALSE") {
        console.log(`The external JavaScript file must contain the <script> tag: 
${quiz.q1}`)
        console.log(chalk.green("Correct Answer"))
        gainMarks++
    } 

    else {
        console.log(`The external JavaScript file must contain the <script> tag: 
${quiz.q1}`)
        console.log(chalk.red("Incorrect Answer"))
    }


    if (quiz.q2 === "if (i !=5)") {
        console.log(`How to write an IF statement for executing some code if i is NOT equal to 5? 
${quiz.q2}`)
        console.log(chalk.green("Correct Answer"))
        gainMarks++
    } 

    else {
        console.log(`How to write an IF statement for executing some code if i is NOT equal to 5? 
${quiz.q2}`)
        console.log(chalk.red("Incorrect Answer"))
    }


    if (quiz.q3 === "Math.round()") {
        console.log(`How do you round the number 7.25, to the nearest integer? 
${quiz.q3}`)
        console.log(chalk.green("Correct Answer"))
        gainMarks++
    } 

    else {
        console.log(`How do you round the number 7.25, to the nearest integer? 
${quiz.q3}`)
        console.log(chalk.red("Incorrect Answer"))
    }


    if (quiz.q4 === "reverse method") {
        console.log(`How do you reverse a string? 
${quiz.q4}`)
        console.log(chalk.green("Correct Answer"))
        gainMarks++
    } 

    else {
        console.log(`How do you reverse a string? 
${quiz.q4}`)
        console.log(chalk.red("Incorrect Answer"))
    }


    console.log(chalk.yellow(`------------------------------------ `))
    console.log(chalk.yellow(`------------------------------------ \n`))


    if(gainMarks < 2) {
        console.log(chalk.red("you failed but not lose try again"))
    }
    if(gainMarks > 2) {
        console.log(chalk.green("You passed The Exam Congratulations"))
    }


    console.log(chalk.magenta(`
        ${quiz.username} your score is ${gainMarks} out of ${totalMarks};
    `))

}


async function Run() {
    let again;
    do {
        await QuizStart();
        again = await inquirer.prompt([{
            type: "string",
            name: "q1",
            message: chalk.bold("Want to give quiz again ? press yes or no")
        }])

    } while (again.q1.toLowerCase() === "yes" || again.q1.toLowerCase() === "y" );
}

Run()