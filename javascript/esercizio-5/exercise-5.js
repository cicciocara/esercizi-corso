const ceo = 2200;
const manager = 1800;
const cto = 1800;
const developer = 1500;
const other = 1000;

function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return `il salario del Ceo è ${ceo}`;
    case "manager":
      return `il salario del Manager è ${manager}`;
    case "cto":
      return `il salario del Cto è ${cto}`;
    case "developer":
      return `il salario del developer è ${developer}`;
    case "other":
      return `il salario di other è ${other}`;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
