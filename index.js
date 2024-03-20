#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first num: ", type: "number", name: "firstnum" },
    { message: "Enter second num: ", type: "number", name: "secondnum" },
    {
        message: "Enter operation to perform: ", type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator == "Addition") {
    console.log("Your value is: ");
    console.log(answer.firstnum + answer.secondnum);
}
else if (answer.operator == "Division") {
    console.log("Your value is: ");
    if (answer.firstnum == 0) {
        console.log("Error");
    }
    else {
        console.log(answer.firstnum / answer.secondnum);
    }
}
else if (answer.operator == "Subtraction") {
    console.log("Your value is: ");
    console.log(answer.firstnum - answer.secondnum);
}
else if (answer.operator == "Multiplication") {
    console.log("Your value is: ");
    console.log(answer.firstnum * answer.secondnum);
}
else {
    console.log("Invalid operator");
}
