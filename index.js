// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const createREADME = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const data = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",

    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",

    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "projectInstall",

    },
    {
        type: "input",
        message: "What is your project used for?",
        name: "projectUsage",

    },
    {
        type: "input",
        message: "How does your project work?",
        name: "projectUsageHow",

    },
    {
        type: "input",
        message: "How do you add to this project?",
        name: "projectContributions",

    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "projectTest",

    },
    {
        type: "input",
        message: "What is your email?",
        name: "projectEmail",

    },
    {   type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["no license", "MIT", "Mozilla Public License 2.0", "Apache 2.0 License", "BSD 2-Clause License",  ]

    },
];

inquirer
    .prompt(data)
    .then((response) =>{
    console.log(data)
    fs.writeFileSync("README.MD", createREADME(response), (err) => err? console.log(err) : console.log("response written to file") );
})
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
