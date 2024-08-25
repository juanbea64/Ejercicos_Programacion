function palindromo(pal) {
    const longitud = pal.length;
    for (let i =0;i<longitud / 2; i++) {
        if (palabraLimpia[i] == palabraLimpia[longitud -1]) {
            return true; 
        }
    }
    
return false; 
}


const palabra = prompt("Ingrese la palabra ");
palindromo(palabra);
