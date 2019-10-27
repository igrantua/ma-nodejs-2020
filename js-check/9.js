function delay(t){
  return new Promise(function(resolve){
    return setTimeout(resolve, t)
  });
}