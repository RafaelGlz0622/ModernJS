let juegos = ["zelda","Mario","Metroid", "Chrono"];
console.log("largo: ", juegos.length);


let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length-1];

console.log({primero, ultimo});

juegos.forEach(elemento => {

    console.log({elemento});

});

let nuevolongitud = juegos.push('F-Zero');
console.log({nuevolongitud, juegos});

nuevolongitud = juegos.unshift('Fire Emblem');
console.log({ nuevolongitud , juegos});

let juegoborrado = juegos.pop();
console.log({juegoborrado, juegos});

let pos = 1;

console.log({juegos});
let juegosborrados = juegos.splice(pos, 2);

console.log({juegosborrados, juegos});


let _obj2 = {
    a: "hola",
    b: "ahuevo",
    chido: "fuck"
}

const newEntry = Object.entries(_obj2)
console.log(newEntry)