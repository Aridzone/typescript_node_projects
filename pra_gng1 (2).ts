import inquirer from "inquirer";

type ansType ={
    userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess: "
    }
])

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo)

if (userGuess === systemGeneratedNo){
    console.log("Yes your answer is correct and You win!")
} else {
    console.log("Please try again Better luck next time!")
}