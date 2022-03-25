const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    const person = persons.find((item) => item.id === id);
    if (person) {
      resolve(person);
    }
  });
}

function fetchJobById(id) {
  return new Promise((resolve) => {
    const job = jobs.find((job) => job.id === id);
    if (job) {
      resolve(job);
    }
  });
}

let ThatPerson = fetchPersonById(2);
ThatPerson.then((person) => {
  console.log(person);
});

let ThatJob = fetchJobById(3);
ThatJob.then((job) => {
  console.log(job);
});
