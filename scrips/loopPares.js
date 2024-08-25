function loopDePares(num) {
    for (let i=0;i<=num;i++) {
        if ((i+num) % 2 === 0) {
            console.log("El número ",i," es par");
        }
        console.log(i);
    }
}


const numero = prompt("Ingrese el numero para realizar la funcion");
loopDePares(numero);
