let NewObjectOne = {
  name: "ObjectA"
};

let NewObjectTwo = new Object();
NewObjectTwo.name = "ObjectB";


function MyObject(name) {
  this.name = name;
 }
 let NewObjectThree = new MyObject("ObjectC");
 
 console.log(NewObjectOne);
 console.log(NewObjectTwo);
 console.log(NewObjectThree);