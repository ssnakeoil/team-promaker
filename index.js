const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "output.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const employeeIds = [];

console.log("Welcome to Team Pro(file)Maker!");

// the function containing the inquirer prompts to collect team memeber data
function dialogue() {
  function createManager() {
    //creates manager
    console.log("Build your team!");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter the manager's name:",
        },
        {
          type: "input",
          name: "managerId",
          message: "Please enter the manager's ID:",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Please enter the manager's email:",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Please enter the manager's office number:",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        employeeIds.push(answers.managerId);
        createTeam();
      });
  }

  function createTeam() {
    //prompt to add specific types
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamMemberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't have any more team members to add",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.teamMemberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please enter the engineer's name:",
        },
        {
          type: "input",
          name: "engineerId",
          message: "Please enter the engineer's ID:",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Please enter the engineer's email:",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Please enter the engineer's GitHub username:",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        employeeIds.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please enter the intern's name:",
        },
        {
          type: "input",
          name: "internId",
          message: "Please enter the intern's ID:",
        },
        {
          type: "input",
          name: "internEmail",
          message: "Please enter the intern's email:",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Please enter the intern's school:",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        employeeIds.push(answers.internId);
        createTeam();
      });
  }

  function buildTeam() {
    // if the output directory doesn't exist, create it
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
  createManager();
  // restarts the dialogue function to add more team members
}

// function call to initialize program
dialogue();