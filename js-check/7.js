const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];
if (vegetables.includes("cucumber", 0)) {
  console.log('vegetables');
} else {
  console.log('fruits');
}


switch (vegetables.includes("cucumber", 0)) {
  case (true):
    console.log('vegetables');
    break;

  case (false):
    console.log('fruits');
    break;
}