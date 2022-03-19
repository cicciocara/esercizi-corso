class Person {
  constructor(firstName, lastName, age) {
    this.name = firstName;
    this.surname = lastName;
    this.age_ = age;
  }

  get firstName() {
    return this.name;
  }

  set firstName(name) {
    this.name = name;
  }

  get lastName() {
    return this.surname;
  }

  set lastName(surname) {
    this.surname = surname;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  get age() {
    return this.age_;
  }

  set age(newAge) {
    this.age_ = newAge;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
