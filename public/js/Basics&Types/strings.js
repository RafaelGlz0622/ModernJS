holamundo = () => {
    console.log("hola mundo");
}


// strings
let email = "rafaelglz0622@gmail.com"
// console.log(email);

// string concatenation
let firstName = "Rafael";
let lastName = "Gonzalez";

let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting characters
// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(fullName[2]);
// string length
// console.log(fullName.length)

// string methods
// console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
// console.log(result);


// commong string methods
let result2 = email.lastIndexOf('g');
console.log(result);



// Cut from index 12. Contains the remains
 result2 = email.slice(0, 9);
result2 = email.substring(0,9);
result2 = email.replace("r","w");
console.log(result2);

// using constants
const title = 'Best reads of 2020';
const author = 'Mario';
const likes2 = 30;

// concatenation way
let result6 = 'The blog called ' + title + ' by ' + author + 
              'has ' + likes2 + ' likes'; 

// template string way
result6 = `The blog called ${title} by ${author} has ${likes2} likes`;

// creating html templates
let html = `
            <h2>${title}</h2>
            <p>${author}</p>
            <span>This blog has ${likes2} likes</span>
            `

console.log(result6);
console.log(html);
