const inquirer = require("inquirer")
const fs = require("fs");
const questions = [
    "What's your project's title?",
    "Time to provide a description--What whas your motivation/what did you learn?",
    "Are there any steps for installation?",
    "Provide me with some instructions/examples for using your app.",
    "Time to give a shoutout to any collaboraters/code that you might've used!",
    "Provide information on how to run tests on your app please.",
    "Enter license information?",
    "What is your email?",
    "what is your GitHub profile name?"
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
      {
        type: "input",
        message: questions[6],
        name: "tests"
      },
      {
        type: "input",
        message: questions[7],
        name: "email"
      },
      {
        type: "input",
        message: questions[8],
        name: "github"
      }
    ])
    .then((response) => {
      console.log("response", response);
      fs.writeFile("userREADME.md", `
# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.instructions}

## Contributing

${response.collaboraters}

## License

${response.license}

## Tests

${response.tests}

## Questions

If you have additional questions please contact me at:
email-- ${response.email}

GitHub Profile-- https://www.github.com/${response.github}`

, (err) => console.log(err))
    });
}

init();
