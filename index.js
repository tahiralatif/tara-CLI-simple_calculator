#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to\`Tara_rajput\`CLI simple_calculator\n");
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform the operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponention"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "Exponention") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
