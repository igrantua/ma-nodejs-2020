const user = {
firstName: 'John', // string
lastName: 'Doe', // string
rate: 0.86, // number in range 0..1
address: { // not empty object or null
line1: '15 Macon St', // string
line2: '', // string
city: 'Gotham' // string
},
phoneNumbers: [ // array containing at least 1 element
{
type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP
number: '(555) 555-1234' // string in specific format
},
{
type: 'LINE',
number: '(555) 555-5678'
}
]
};

if (typeof user.firstName === 'string') {
  console.log("user.firstName is string");
} else {
  console.log("user.firstName is not string");
} if (typeof user.lastName === 'string') {
  console.log("user.lastName is string");
} else {
  console.log("user.lastName is not string");
} if (user.rate >= 0 && user.rate <= 1) {
  console.log("user.rate is number in range 0..1");
} else {
  console.log("user.rate is not number in range 0..1");
} if (typeof user.address === "object" || user.address === null) {
  console.log("user.address is not empty object or null");
} else {
  console.log("user.address is empty object");
} if (typeof user.address.line1 === 'string') {
  console.log("user.address.line1 is string");
} else console.log("user.address.line1 is not string");
if (typeof user.address.line2 === 'string') {
  console.log("user.address.line2 is string");
} else console.log("user.address.line2 is not string");
if (typeof user.address.city === 'string') {
  console.log("user.address.city is string");
} else console.log("user.address.city is not string");
if (Array.isArray(user.phoneNumbers) && user.phoneNumbers.length > 1) {
  console.log("user.phoneNumbers is array > 1");
} else console.log("user.phoneNumbers is not array");
if (typeof user.phoneNumbers[0].type === 'string'
  && user.phoneNumbers[0].type.includes('MOBILE')
  || user.phoneNumbers[0].type.includes('LINE')
  || user.phoneNumbers[0].type.includes('VOIP')) {
  console.log("user.phoneNumbers[0].type is limited string");
} else console.log("user.phoneNumbers[0].type is not limited string");
if (typeof user.phoneNumbers[0].number === 'string'
  && user.phoneNumbers[0].number[0] === '('
  && user.phoneNumbers[0].number[1] >= 0 && user.phoneNumbers[0].number[1] <= 9
  && user.phoneNumbers[0].number[2] >= 0 && user.phoneNumbers[0].number[2] <= 9
  && user.phoneNumbers[0].number[3] >= 0 && user.phoneNumbers[0].number[3] <= 9
  && user.phoneNumbers[0].number[4] === ')'
  && user.phoneNumbers[0].number[5] === ' '
  && user.phoneNumbers[0].number[6] >= 0 && user.phoneNumbers[0].number[6] <= 9
  && user.phoneNumbers[0].number[7] >= 0 && user.phoneNumbers[0].number[7] <= 9
  && user.phoneNumbers[0].number[8] >= 0 && user.phoneNumbers[0].number[8] <= 9
  && user.phoneNumbers[0].number[9] === '-'
  && user.phoneNumbers[0].number[10] >= 0 && user.phoneNumbers[0].number[10] <= 9
  && user.phoneNumbers[0].number[11] >= 0 && user.phoneNumbers[0].number[11] <= 9
  && user.phoneNumbers[0].number[12] >= 0 && user.phoneNumbers[0].number[12] <= 9
  && user.phoneNumbers[0].number[13] >= 0 && user.phoneNumbers[0].number[13] <= 9) {
  console.log("user.phoneNumbers[0].number is string in specific format");
} else console.log("user.phoneNumbers[0].number is not string in specific format");
if (typeof user.phoneNumbers[1].type === 'string'
  && user.phoneNumbers[1].type.includes('MOBILE')
  || user.phoneNumbers[1].type.includes('LINE')
  || user.phoneNumbers[1].type.includes('VOIP')) {
  console.log("user.phoneNumbers[1].type is limited string");
} else console.log("user.phoneNumbers[1].type is not limited string");
if (typeof user.phoneNumbers[0].number === 'string'
  && user.phoneNumbers[1].number[0] === '('
  && user.phoneNumbers[1].number[1] >= 0 && user.phoneNumbers[1].number[1] <= 9
  && user.phoneNumbers[1].number[2] >= 0 && user.phoneNumbers[1].number[2] <= 9
  && user.phoneNumbers[1].number[3] >= 0 && user.phoneNumbers[1].number[3] <= 9
  && user.phoneNumbers[1].number[4] === ')'
  && user.phoneNumbers[1].number[5] === ' '
  && user.phoneNumbers[1].number[6] >= 0 && user.phoneNumbers[1].number[6] <= 9
  && user.phoneNumbers[1].number[7] >= 0 && user.phoneNumbers[1].number[7] <= 9
  && user.phoneNumbers[1].number[8] >= 0 && user.phoneNumbers[1].number[8] <= 9
  && user.phoneNumbers[1].number[9] === '-'
  && user.phoneNumbers[1].number[10] >= 0 && user.phoneNumbers[1].number[10] <= 9
  && user.phoneNumbers[1].number[11] >= 0 && user.phoneNumbers[1].number[11] <= 9
  && user.phoneNumbers[1].number[12] >= 0 && user.phoneNumbers[1].number[12] <= 9
  && user.phoneNumbers[1].number[13] >= 0 && user.phoneNumbers[1].number[13] <= 9) {
  console.log("user.phoneNumbers[1].number is string in specific format");
} else console.log("user.phoneNumbers[1].number is not string in specific format");
