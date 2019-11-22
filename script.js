var inquirer = require("inquirer");
var fs = require('fs');

// Employee:
// * name
// * id
// * title
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