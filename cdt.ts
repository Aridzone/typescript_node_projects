import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
differenceInSeconds

const res = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "Please enter the amount of second"
});

let input = res.userInput 

function startTime(val: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <=0){
        console.log("Time is expired");
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min}:${sec}`);
    }, 1000);
}

startTime(input);

