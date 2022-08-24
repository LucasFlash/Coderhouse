
let suma=0;
let numero;
let anio=2022;

numero = prompt("Ingrese el Salario Inicial: -Ajuste de 30% Anual- ");
anio0 = prompt("Ingrese el Año en el que Finaliza el Contrato Laboral -Año Inicial es 2022- ");


console.log("Año " + anio);
console.log(numero);

do {
    
    suma = (1.3) * parseInt(numero); 
    numero = suma;
    anio = anio + 1;
    console.log("Año " + anio);
    console.log(numero);
} while (anio<anio0);

console.log( "Año " + anio0 + " Finaliza el Contrato Laboral ");