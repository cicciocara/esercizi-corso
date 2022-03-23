const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

Object.keys(person).forEach((key) => {
  if (!Number(person[key])) delete person[key];
});

const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }
