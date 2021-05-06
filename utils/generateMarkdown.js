
// Function to generate markdown for README
function generateMarkdown(answers) {
  return  `
  ## Title
  ${answers.title}

  ## Description 
  ${answers.description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Contact](#contact)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  See my contact info below if you have any questions.

  ${answers.githubUserName}

  ${answers.githubURL}
  
  ${answers.email}
  
`
};

module.exports = generateMarkdown;
