const my_number = -1;
var myNumber = 0;
let number = 3;
if (true) {
  const my_number = 1;
  var myNumber = 2;
  number = 6;

}
const sum = my_number + myNumber + number; // Result: -1 + 2 + 6 = 7
console.log(sum);