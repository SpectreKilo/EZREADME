// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else
  if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" 
  } else 
  if (license === "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else 
  if (license === "BSD 2-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "no license") {
    return "";
  } else {
    return " - [License](#License)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "no license") {
    return "";
  } else {
    return `## License
${license}`
  }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
createREADME = (data) => {
  return `
  ${renderLicenseBadge(data.license)}
# ${data.projectTitle}

## Description
This project ${data.projectUsage} by ${data.projectUsageHow}.
  
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
To install this project you should ${data.projectInstall}.

## Usage
This project is used to ${data.projectUsage}.

${renderLicenseSection(data.license)}

## Contributing
To contribute to the project you should ${data.projectContributions}.

## Tests
If you want to test the project you should ${data.projectTest}.

## Questions?
My GitHub username is ${data.username}, you may also email me at ${data.projectEmail}
  
  
  
  
`};

module.exports = createREADME;
