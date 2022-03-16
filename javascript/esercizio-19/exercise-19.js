const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Micheal";

/* Modificando l'oggetto person2 viene modificato anche 
l'oggetto person1 in quanto quello che avviene in questo 
caso  tra gli oggetti prende il nome di "passaggio per riferimento".
Vengono modificate entrambe le proprietà perchè gli 
oggetti person1 e person2 puntano alla stessa locazione
di memoria, dunque come fossere un'unico oggetto. */

console.log(person1);
console.log(person2);
