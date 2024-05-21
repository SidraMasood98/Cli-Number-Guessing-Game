#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twelcome Sidra Masood - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber",
        message: "please guess a number from the following list",
        type: "list",
        choices: [1, 2, 3, 4, 5],
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations!! you have select a correct number.");
}
else {
    console.log("sorry you have a wrong number");
}
