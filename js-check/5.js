const data = '21345A67098';
let dataRes = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i] != 0 && data[i] %2 == 0) dataRes += data[i]; //zero is an even number?
  }
  console.log(dataRes);