let text = 'Hello World!';
let textResult = '';
let toFind = 'o';
let pos = 0;
while (true) {
  let foundPos = text.indexOf(toFind, pos);
  if (foundPos == -1) break;

  console.log(foundPos+1);//didnt get the differnce between ind and pos
  pos = foundPos + 1;
}

for (let char of text) {
  if (char != 'l') {
    textResult += char;
  } 
 }
 console.log(textResult);