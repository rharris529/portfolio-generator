const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page.template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log("Portfolio Complete! Checkout index.html to see the output!")
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself."
        }
    ]);
};

const promptProject = portfolioData => {
    
    // if there's no projects array, create one //
    // if (!portfolioData.projects) {
    portfolioData.projects = [];
    // };

    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required)",
            validate: projName => {
                if(projName) {
                    return true;
                } else {
                    console.log("Please enter a name for your project!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (Required)",
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log("Please provide a description!");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "ianguages", 
            message: "What did you build this project with? (Check all that apply)",
            choices: ["Javascript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input",
            name: "link",
            message: "Enter the GitHub link to your project. (Required)",
            validate: link => {
                if (link) {
                    return true;
                } else {
                    console.log("Please provide a link!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "feature",
            message: "Would you like to feature this project?",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        }
    ]);    
};

promptUser()
.then(answers => console.log(answers))
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);    
});

