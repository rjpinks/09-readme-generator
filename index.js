const inquirer = require("inquirer")
const fs = require("fs");
const questions = [
    "What's your project's title?",
    "Time to provide a description--What whas your motivation/what did you learn?",
    "Are there any steps for installation?",
    "Provide me with some instructions/examples for using your app.",
    "Time to give a shoutout to any collaboraters/code that you might've used!",
    "Provide information on how to run tests on your app please.",
    "Please select a license: Apache, BSD, or MIT",
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
        name: "tests"
      },
      {
        type: "input",
        message: questions[6],
        name: "license"
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
      if (response.license === "MIT" || response.license === "mit") {
        var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (response.license === "Apache" || response.license === "apache") {
        var badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else if (response.license === "BSD" || response.license === "bsd") {
        var badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      } else {
        var badge = "Well, we didn't enter a proper response. We're learning how to use throw and error object, but I don't think I have a grasp yet."
      }
      fs.writeFile("userREADME.md", 
`${badge}

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

This app is using the ${response.license} license.

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
