const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const employeeIds = [];

console.log("Welcome to Team Pro(file)Maker!");

function dialogue() {
    function createManager() {
        console.log('Build your team!');
        inquirer
          .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter the manager\'s name:',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Please enter the manager\'s ID:',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the manager\'s email:',
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Please enter the manager\'s office number:',
            },
            
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            employeeIds.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {}}