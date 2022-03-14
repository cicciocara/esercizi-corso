const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  return students.push(student);
}

addStudent('Marco');
console.log(students);

/*Non sto riassegnando o dichiarando nuovamente la costante,
 è già dichiarata e assegnata, sto solo aggiungendo un elemento
alla "lista" a cui punta la costante. */