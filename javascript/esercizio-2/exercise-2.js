function canPlay() {
  const personName = 'Paul'; // ho reso personName di sola lettura, dunque non sarà possibile modificarla

  if (true) {
    personName = 'George';
  }

  personName += ' plays football';

  return personName;
}

canPlay();