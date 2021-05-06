// Packages needed to run app
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')



// Array of questions used to build readme
const questions = [
        {
            name: "title",
            message: "What is the title of your project?",
            type:"input",
        },{
            type:"input",
            name: "description",
            message: "Describe your project",
            
        },{
            type:"input",
            name: "installation",
            message: "How can someone install your application?",
            
        },{
            type:"input",
            name: "usage",
            message: "How can someone use your applicaiton?",
        },{
            type:"list",
            message: "Please select the license for this project?",
            name: "license",
            choices: [
                "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
                "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
                "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", 
                "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" , 
                "None"],
        },{
            type:"input",
            name: "contributing",
            message: "How can someone contribute to this project?",
        },{
            type:"input",
            name: "tests",
            message: "Give test instructions if any",
        },
        {
            type: 'input',
            name: 'githubUserName',
            message: 'Enter your github user name',
        },
        {
            type: 'input',
            name: 'githubURL',
            message: 'Enter your github URL',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email address',
        },
];

// Function to write the read me file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      err
        ? console.error(err)
        : console.log("README file created successfully");
    });
  }

// Function that initializes the app
  function init() {
    inquirer.prompt(questions).then(function (answers) {
      const data = generateMarkdown(answers);
      writeToFile('./README.md', data);
    });
  }

  init();
