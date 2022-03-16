let person = {
  name: "Francesco",
  surname: "Caramagno",
  get firstName() {
    return this.name;
  },
  set firstName(value) {
    this.name = value;
  },

  get lastName() {
    return this.surname;
  },
  set lastName(value) {
    this.surname = value;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

let john = {};
john.firstName = "John";
john.lastName = "Doe";

john.fullName = person.fullName;

let simon = {};
simon.firstName = "Simon";
simon.lastName = "Collins";

simon.fullName = person.fullName;

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
