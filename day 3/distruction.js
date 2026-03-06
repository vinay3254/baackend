//syntax//
//let [a, b] = arrayName;

//Example//

let Names = ["ARK", "FAK", "KP","SNN"];

let [first, second] = Names;

console.log(first);   // ARK
console.log(second);  // FAK


//Destructuring with Objects//

let student = {
  name: "Ark",
  age: 20,
  place:"bangalore",
};

let { name, age, place } = student;

console.log(name);
console.log(age);


//rename while distruction//
let { name: studentName, age: studentAge } = student;

console.log(studentName);