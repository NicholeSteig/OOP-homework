var inquirer = require("inquirer");
var fs = require('fs');

// Employee:
// * name
// * id
// * title
enquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    }
    
]).then(function(input) {
    class Employee {
        constructor() {
         this.name = input.name;
         this.id = input.id;
         this.title = input.title;   
        }
    }
})
// * getName()
// * getId()
// * getEmail()
// * getRole() (Returns 'Employee')

// Manager:
// * officeNumber
// * getRole() (Overridden to return 'Manager')

// Engineer:
// * github  (GitHub username)
// * getGithub()
// * getRole() (Overridden to return 'Engineer')

// Intern:
// * school 
// * getSchool()
// * getRole() (Overridden to return 'Intern')