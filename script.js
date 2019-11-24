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
        type: "checkbox",
        name: "title",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
    
]).then(function(input) {
    class Employee {
        constructor() {
         this.name = input.name;
         this.id = input.id;
         this.role = "Employee";  
        }
    }
    if (this.title === "Manager") {
        enquirer.prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"
            },
        class Manager extends Employee {
            constructor(officeNumber) {
                super(input.name, input.id, input.title, "Employee");
                this.role = "Manager";

            }
        }
    ]).then(function(input) {

    });

    };
    if (this.title === "Manager") {

    };
    if (this.title === "Manager") {

    };
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

function getRole() {
    return this.role;
};

function getName() {
    return this.name;
};

function getID() {
return this.id;
};

function getEmail() {
    return this.email;
}