function arrayHandler(arreglo1, arreglo2) {
    if (arreglo1.length==arreglo2.length) {
        for (let i=0;i<arreglo1.length;i++) {
            console.log("Soy ",arreglo1[i]," y yo soy ",arreglo2[i]);
        }
    } else {
        console.error("Los arreglos deben tener el mismo largo. Oprimir F5 para reiniciar.");
    }
}

arrayHandler([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ["J", "a", "v", "a", "s", "c", "r", "i", "p","t"]);
const ar1 = prompt("Introduzca un arreglo ejemplo: ['j','u','a','n']");
const ar2 = prompt("Introduzca un arreglo del mismo tamaño del primer arreglo  ejemplo: ['1','2','3','3']");
arrayHandler(ar1,ar2);

