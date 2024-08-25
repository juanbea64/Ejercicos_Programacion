function nuevoArreglo(num){
    let arreglo=[num];
    for(let i=0;i<=num;i++){
        arreglo[i]=i;

    }
    console.log("El nuevo arreglo es:",arreglo);
}

const numero = parseInt(prompt("Ingrese el numero para realizar el arreglo respectivo"));
nuevoArreglo(numero);