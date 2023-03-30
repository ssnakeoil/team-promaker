//
const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
<div class="card">
<div class="card-header">
    <h2>Manager</h2>
    <h3>John</h3>
</div>
<div class="card-body">
    <p>ID: 1</p>
    <p>Email: <a href="mailto:  ">  </a></p>
    <p>Office Number: 123</p>
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
                <h2>Intern</h2>
                <h3>John</h3>
            </div>
            <div class="card-body">
                <p>ID: 1</p>
                <p>Email: <a href="mailto:  ">  </a></p>
                <p>School:  </p>
            </div> 
        </div>
        `;
  };
};
