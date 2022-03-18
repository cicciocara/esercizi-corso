function getKeys(obj) {
  let keysArray = [];
  for (key of Object.keys(obj)) {
    keysArray.push(key);
  }
  return keysArray;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
