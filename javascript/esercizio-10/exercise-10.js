function sumUntil(maxValue) {
  let summer = 0;
  for (let i = 1; i <= maxValue; i++) {
    summer += i;
  }
  return summer;
}

console.log(sumUntil(7));
