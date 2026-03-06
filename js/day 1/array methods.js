//map() → Modify Every Item//
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

//filter() → Filter Items Based on Condition//
let ages = [15, 22, 30, 18];
let adults = ages.filter(age => age >= 18);
console.log(adults);

//reduce() → Reduce to Single Value//
let num = [1, 2, 3, 4];
let total = num.reduce((acc, current) => {
    return acc + current;
}, 0);
console.log(total);