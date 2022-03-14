const ceo = 2200;
const manager = 1800;
const cto = 1800;
const developer = 1500;
const other = 1000;

function calculateSalary(role) {
  if(role === 'ceo'){
    return `the Ceo salary is ${ceo}`;
  }
  else if(role === 'manager'){
    return `the Manager salary is ${manager}`;
  }
  else if(role === 'cto'){
    return `the Cto salaty is ${cto}`;
  }
  else if(role === 'developer'){
    return `the Developer salary is ${developer}`;
  }
  else(role === 'other')
  {
    return `Other salary is ${other}`;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);