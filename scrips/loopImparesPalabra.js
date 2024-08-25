function loopDeImpares(num, pal) {
    for (let i=0;i<=100;i++) {
        console.log(i);
        if ((i+num)%2 !== 0) {
            console.log(pal);
        }
    }
}

const numero = parseInt(prompt("Ingrese el numero para realizar la funcion"));
const palabra = prompt("Ingrese la palabra para realizar la funcion");
loopDeImpares(numero, palabra);

