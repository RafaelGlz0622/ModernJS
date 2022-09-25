// boolean & comparissions

console.log(true, false, "true","false");

// methods can return booleans
let email2 = 'luigi@theningja.com';
let names = ['Mario','luigi','toad'];
// this is like 'contains'
let result01 = email.includes('@');
result01 = names.includes('luigi');

console.log(result01);

// loose comparison (different types can still be equal)
let age = 25;
console.log(age == 26);
console.log(age != 25);
console.log(age == 25);

// strict comparison (different types cannot be equal)
console.log(age === '25')
console.log(age !== 25)

// stric 