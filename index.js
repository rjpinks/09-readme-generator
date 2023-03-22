const inquirer = require("inquirer")
const fs = require("fs");
const questions = [
    "What's your project's title?",
    "Time to provide a description--What whas your motivation/what did you learn?",
    "Are there any steps for installation?",
    "Provide me with some instructions/examples for using your app.",
    "Time to give a shoutout to any collaboraters/code that you might've used!",
    "Are you using a license?"
];

function init() {
    inquirer.prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'title'
      },
      {
        type: "input",
        message: questions[1],
        name: "description"
      },
      {
        type: "input",
        message: questions[2],
        name: "installation"
      },
      {
        type: "input",
        message: questions[3],
        name: "instructions"
      },
      {
        type: "input",
        message: questions[4],
        name: "collaboraters"
      },
      {
        type: "input",
        message: questions[5],
        name: "license"
      },
    ])
    .then((response) => {
      console.log("response", response);
      fs.writeFile("userREADME.md", `
# ${response.title}

## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.instructions}

## Credits

${response.collaboraters}

## License

${response.license}`, (err) => console.log(err))
    });
}

init();
