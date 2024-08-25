const letras = [];

function split(pal) {
    
    for (let i = 0; i < pal.length; i++) {
        letras.push(pal[i]);
    }
    console.log("Las letras de la palabra dentro de un array son:", letras);
}

const palabra = prompt("Ingrese la palabra para poder convertirla a un arreglo");
split(palabra);
