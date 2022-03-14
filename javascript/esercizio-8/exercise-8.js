function calculateAverageAge(persons) {
  const value = persons.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0);
  let index_sum = persons.length;
  return value / index_sum;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(`Approssimando, l'età media è ${Math.round(averageAge)} anni`);
console.log(`l'età media effettiva è invece ${averageAge} anni`);
