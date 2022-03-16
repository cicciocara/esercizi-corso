const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

/* non fatelo a casa
for (let key in Object.keys(person)) {
  console.log(`${Object.keys(person)[key]}: ${Object.values(person)[key]}`);
}  */

for (let key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}
