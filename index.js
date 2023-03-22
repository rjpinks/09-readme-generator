// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    //I'm pretty sure that I'll want to cycle through these as I asked questions in my .prompt() for loops would be better than typing each out
    "What's your project's title?",
    "Time to provide a description--What whas your motivation/what did you learn?",
    "Are there any steps for installation?",
    "Provide me with some instructions/examples for using your app.",
    "Time to give a shoutout to any collaboraters/code that you might've used!",
    "Are you using a license?"
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
 //   js.writeFile("README.md", /*this is the value of the README.md*/, /*error stuff goes here*/)
//}

// TODO: Create a function to initialize app
function init() {
  // I'm not sure why but this forEach doesn't work bc it doesn't wait for each prompt
  // questions.forEach(question => {
    //anyways this bad boy right here is making an object which we'll make our readme from. need to look up templates next!
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
  // })
}
//I think this is the function that will have the .prompt object that will ask the questions.
//after the questions are finished then we need to call writeToFile() bc that's going gonna make the finished product.

// Function call to initialize app
init();
