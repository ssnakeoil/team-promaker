//
const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2>${manager.getRole()}</h2>
        <h3>${manager.getName()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${manager.getId()}/p>
        <p>Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    </div>
`;
  };

  const generateEngineer = (engineer) => {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.getRole()}</h2>
                <h3>${engineer.getName()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>GitHub: <a href="<a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
            </div>
        </div>
`;
  };

  const generateIntern = (intern) => {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${intern.getRole()}</h2>
                <h3>${intern.getName()}</h3>
            </div>
            <div class="card-body">
                <p>ID: 1</p>
                <p>Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
            </div> 
        </div>
    `;
  };

    const html = []; //empty array to store filled cards

    html.push(team //pushes the manager card to the html array
        .filter(employee => employee.getRole() === "Manager") //filters the team array for the manager role
        .map(manager => generateManager(manager)) //maps the manager card to the html array; mapping is a way to iterate over an array
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join(""); //joins the html array into a string; this is the string that will be written to the file
};

// page code
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        ${generateTeam(team)}
    </main>
</body>
</html>
`;
};
