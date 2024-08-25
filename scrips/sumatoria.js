function sumatoria(num){
    if (num>=1) {
        let suma=0;
    
        for (let i=1;i<=num;i++) {
            suma=suma+i;
        }
        
        console.log("La sumatoria es: ",suma)
    }else{
        return 0;
    }
}    
const numero = parseInt(prompt("Ingrese el numero para realizar la sumatoria con su numeros anteriores"));
sumatoria(numero);

