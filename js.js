function findBalance(s) {
  const splitAndSort = s.split('').sort();

  if (
    splitAndSort[s.length / 2 - 1] === '(' &&
    splitAndSort[s.length / 2] === ')'
  ) {
    return 0;
  }

  const firstClosingIndex = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      firstClosingIndex.push(i);
    }
  }
  console.log(firstClosingIndex);
  return s.length - (firstClosingIndex[0] + 1);
}

console.log(findBalance('()))'));
console.log(findBalance('()()()'));
