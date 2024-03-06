#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleepAndStart = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function rainbowTitle() {
    let addRainbowTitle = chalkAnimation.rainbow("Let's start calculation!");
    await sleepAndStart();
    addRainbowTitle.stop();
    let templateCalc = chalk.cyanBright(`
     _____________________
    |  _________________  |
    | | @Saad        0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    | | x^| \u221A |Off| | C | |
    | |___|___|___| |___| |
    |_____________________|
    `);
    console.log(templateCalc);
}
await rainbowTitle();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "Operator",
            message: "Which operation do you want to perform?",
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power", "\u221A Square Root"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the number:",
        },
        {
            type: "number",
            name: "exponent",
            message: "Enter the exponent:",
            when: (answers) => answers.Operator === "^ Power",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the number:",
            when: (answers) => answers.Operator === "- Subtraction"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the number:",
            when: (answers) => answers.Operator === "+ Addition"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the number:",
            when: (answers) => answers.Operator === "* Multiplication"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the number",
            when: (answers) => answers.Operator === "/ Division"
        }
    ]);
    if (answers.Operator === "+ Addition") {
        console.log(chalk.blueBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.Operator === "- Subtraction") {
        console.log(chalk.blueBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.Operator === "* Multiplication") {
        console.log(chalk.blueBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.Operator === "/ Division") {
        console.log(chalk.blueBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if (answers.Operator === "^ Power") {
        console.log(chalk.blueBright(`${answers.num1} ^ ${answers.exponent} = ${Math.pow(Number(answers.num1), answers.exponent)}`));
    }
    else if (answers.Operator === "\u221A Square Root") {
        console.log(chalk.blueBright(`\u221A${answers.num1} = ${Math.sqrt(Number(answers.num1))}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var restart = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Type 'Yes' to continue and 'no' to uncontinue:"
        });
    } while (restart.restart.toLowerCase() === "yes");
}
startAgain();
