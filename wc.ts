#!/usr/bin/env node

import inquirer from "inquirer";

const answer: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count word: "
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);


