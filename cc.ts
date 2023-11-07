import inquirer from "inquirer";

let conversion = {
    "PKR": {
        "USD": 0.0033,
        "GBP": 0.0026,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.25,
        "PKR": 279.82,
        "GBP": 1
    },
    "USD": {
        "PKR": 287.50,
        "GBP": 0.80,
        "USD": 1
    },
}

const answer: {
    from: "PKR" | "USD" | "GBP",
    to: string,
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount to convert: "
    }
]);

const { from, to, amount } = answer;

if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
} else {
    console.log("Invalid inputs");
}
