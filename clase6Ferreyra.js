
let suma=0;
let num1=100;
let num2=200;
let num3=400;
let anio0=2022;
let resultado;
let nombre;
let apellido;
let edad;
let pais;
let servicio;
let anios;



nombre = prompt("Introduzca su nombre: ");
apellido = prompt("Introduzca su apellido: ");
edad = prompt("Introduzca su edad: ");
pais = prompt("Pais de Origen: 1- Argentina, 2- Brasil, 3- Mexico, 4- Resto de Latam: ");
servicio = prompt("Escoja un Servicio - 1: Basico; 2: Completo; 3: Premiun. ");
anios = prompt("Ingrese la Cantidad de Años que Desea Contratar el Servicio ");

const paises = ["Argentina", "Brasil", "Mexico", "RestoLatam"];
const servicios = ["Basico", "Completo", "Premiun"];

function Persona(nombre, apellido, edad, pais) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.pais = pais;
}

const Persona1 = new Persona(nombre, apellido, edad, pais);

console.log( Persona1["nombre"] + " " + Persona1["apellido"] + 
	" selecciono el servicio "+ servicios[servicio-1]+ " dentro de "+ paises[ Persona1["pais"] - 1 ] );

function anioFin(anios){
  let resultanio = 2022 + parseInt(anios);
  return resultanio;
}  

const iva = x => x * 0.21; 


console.log("Año " + anio0);
console.log("Total a Pagar (IVA incluido) ");



switch(servicio){


//Servicio Basico*/

case "1":


function s1(num1){
  let resultado = parseInt(num1) + parseInt(num1*0.3);
  return resultado;
}

console.log(num1+iva(num1));

do {
recargo = 0;	
anio0 = anio0 + 1;

if(anio0%2==0){ 
	recargo = (0.05)*s1(num1);
}
else{ recargo = 0;
}

console.log("Año " + anio0);
console.log("Total a Pagar (IVA incluido) ");
console.log( s1(num1) + recargo + iva(s1(num1)) );
num1 = s1(num1);

} while(anio0<(anioFin(anios)-1));

break; 


//Servicio Completo*/

case "2":

function s2(num2){
  let resultado = parseInt(num2) + parseInt(num2*0.35);
  return resultado;
}

console.log(num2+iva(num2));
do {
anio0 = anio0 + 1;
console.log("Año "+ anio0);
console.log("Total a Pagar (IVA incluido) ");
console.log(s2(num2) + iva(s2(num2)) );
num2 = s2(num2);

} while(anio0<(anioFin(anios)-1));

break;


//Servicio Premiun*/

case "3":

function s3(num3){
  let resultado = parseInt(num3) + parseInt(num3*0.45);
  return resultado;
}

console.log(num3+iva(num3));
do {
anio0 = anio0 + 1;
console.log("Año " + anio0);
console.log("Total a Pagar (IVA incluido) ");
console.log(s3(num3) + iva( s3(num3) ) );
num3 = s3(num3);

} while(anio0<(anioFin(anios)-1));

break;

default:
console.log("Error, Ingrese una Opción Valida");
break; 
}
