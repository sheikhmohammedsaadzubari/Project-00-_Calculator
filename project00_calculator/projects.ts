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
    | | x^| √ |Off| | C | |
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
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power", "√ Square Root"],
        },
        {
            type: "input",
            name: "num1",
            message: "Enter the first number:",
            validate: (input) => {
                if (input.trim().toLowerCase() === "power") {
                    return "Please enter a valid number as the base.";
                }
                return true;
            },
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the exponent:",
            when: (answers) => answers.Operator === "^ Power",
        },
    ]);

    if (answers.Operator === "+ Addition") {
        console.log(chalk.blueBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    } else if (answers.Operator === "- Subtraction") {
        console.log(chalk.blueBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    } else if (answers.Operator === "* Multiplication") {
        console.log(chalk.blueBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    } else if (answers.Operator === "/ Division") {
        console.log(chalk.blueBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    } else if (answers.Operator === "^ Power") {
        console.log(chalk.blueBright(`${answers.num1} ^ ${answers.num2} = ${Math.pow(Number(answers.num1), answers.num2)}`));
    } else if (answers.Operator === "√ Square Root") {
        console.log(chalk.blueBright(`√${answers.num1} = ${Math.sqrt(Number(answers.num1))}`));
    }
}



async function startAgain() {
  do{
    await askQuestion();
    var restart = await inquirer
    .prompt({
        type: "input",
        name: "restart",
        message: "Do you want to continue? Type 'continue' to continue and 'no' to uncontinue:"
    })
  }while(restart.restart.toLowerCase() === "continue")
}
startAgain();
