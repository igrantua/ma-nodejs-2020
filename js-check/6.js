const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];
const length = first.length;
let third = [];

for (let i = 0; i < length; i++) {
    third.push(first.pop());
    third.push(second.pop());
  }
  console.log(third);