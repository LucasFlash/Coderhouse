


// Declaracion de Variables*/

let suma=0;
let num1=100;
let num2=200;
let num3=400;
let anio0=2022;
let resultado;
let precio_final;




//Variables a partir del input


let NomYApe = document.getElementById("NomYApe")
NomYApe.addEventListener("input", () => {
    console.log(NomYApe.value)
}) 

let anios = document.getElementById("anios")
anios.addEventListener("input", () => {
    let onJSON = JSON.stringify(anios.value);
	localStorage.setItem("anios", onJSON);
    console.log(anios.value)
    
}) 


let servicio = document.getElementById("servicio")
servicio.addEventListener("input", () => {
    let onJSON = JSON.stringify(servicio.value);
	localStorage.setItem("servicio", onJSON);
    console.log(servicio.value)
}) 



let pais = document.getElementById("pais")
pais.addEventListener("input", () => {
	let unJSON = JSON.stringify(pais.value);
	localStorage.setItem("pais", unJSON);
    console.log(pais.value)
}) 








const paises = ["Argentina", "Brasil", "Mexico", "RestoLatam"];
const preciosFinal = [0];




function Persona(nombre, apellido, edad, pais) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.pais = pais;
}



const servicios = [

	{nombre: "Basico", horasDiarias: 12, numDispositivos: 1, descApp: 25},
	{nombre: "Completo", horasDiarias: 18, numDispositivos: 3, descApp: 50},
	{nombre: "Premiun", horasDiarias: 24, numDispositivos: 6, descApp: 100},

]

//Aplicando Spread y Destructuracion

const serviciosBasico = 

	{nombre: "Basico", horasDiarias: 12, numDispositivos: 1, descApp: 25}

const serviciosBasico2 = {
	...serviciosBasico
}

console.log(serviciosBasico2)


const {nombre, horasDiarias} = serviciosBasico
console.log(nombre)
console.log(horasDiarias)

///


const regresarNombre = function(servicios) {
	return servicios.nombre;
}

const nombresDeServicios = servicios.map(regresarNombre);
console.log(nombresDeServicios);


const Persona1 = new Persona(NomYApe, pais);



//Resultados*/




function anioFin(anios){
  let resultanio = 2022 + parseInt(anios);
  return resultanio;
}  

const iva = x => x * 0.21; 






switch(servicio){


//Servicio Basico*/

case "1":


function s1(num1){
  let resultado = parseInt(num1) + parseInt(num1*0.3);
  return resultado;
}

console.log(num1+iva(num1));
preciosFinal.push( num1 + iva(num1) );

do {
recargo = 0;	
anio0 = anio0 + 1;

if(anio0%2==0){ 
	recargo = (0.05)*s1(num1);
}
else{ recargo = 0;
}

console.log("A??o " + anio0);
console.log("Total a Pagar (IVA incluido) ");
console.log( s1(num1) + recargo + iva(s1(num1)) );
preciosFinal.push( s1(num1) + iva( s1(num1) ) );
num1 = s1(num1);

} while(anio0<(anioFin(anios)-1));

for (let i=0; i<preciosFinal.length; i++){

	 precio_final= precio_final+preciosFinal[i];}
	

break; 


//Servicio Completo*/

case "2":

function s2(num2){
  let resultado = parseInt(num2) + parseInt(num2*0.35);
  return resultado;
}

console.log(num2+iva(num2));
preciosFinal.push( num2 + iva(num2) );

do {
anio0 = anio0 + 1;
console.log("A??o "+ anio0);
console.log("Total a Pagar (IVA incluido) ");
console.log(s2(num2) + iva(s2(num2)) );
preciosFinal.push( s2(num2) + iva( s2(num2) ) );
num2 = s2(num2);


} while(anio0<(anioFin(anios)-1));

for (let i=0; i<preciosFinal.length; i++){

	 precio_final= precio_final+preciosFinal[i];}
	

break;


//Servicio Premiun*/

case "3":

function s3(num3){
  let resultado = parseInt(num3) + parseInt(num3*0.45);
  return resultado;
}


console.log(num3+iva(num3));
preciosFinal.push( num3 + iva(num3) );

do {

anio0 = anio0 + 1;
console.log("A??o " + anio0);
console.log("Total a Pagar (IVA incluido) ");
console.log(s3(num3) + iva( s3(num3) ) );
preciosFinal.push( s3(num3) + iva( s3(num3) ) );
num3 = s3(num3);


} while(anio0<(anioFin(anios)-1));


for (let i=0; i<preciosFinal.length; i++){

	 precio_final= precio_final+preciosFinal[i];}
	

break;

default:
console.log("Error, Ingrese una Opci??n Valida");
break; 
}





//Manipulacion del DOM

let boton = document.getElementById("Enviar")

boton.onclick = () => {Detalles1.innerHTML = NomYApe.value + " adquirio el servicio " +  nombresDeServicios[servicio.value-1] }


let boton0 = document.getElementById("Enviar0")

boton0.onclick = function mostrar(){
	let NomYApe = document.getElementById("NomYApe").value;
	let anios = document.getElementById("anios").value;
	let servicio = document.getElementById("servicio").value;
	let pais = document.getElementById("pais").value;
    console.log(NomYApe);
    console.log(anios);
    console.log(servicio);
    console.log(pais);
}


// Operador AND
servicios.length === 3 && console.log("Hay tres tipos de servicio")


// Trabajando con Librerias: Luxon y SweetAlert


// Inicio Libreria Luxon
const DateTime = luxon.DateTime


// Boton que al presionarlo muestra un alerta con la fecha de Vencimiento del contrato
// La fecha se calcula con Luxon teniendo en cuenta la cantidad de a??os que el cliente
// decide ingresar en el input anteriormente cofeccionado.

let btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {

    const x1 = anios.value
    console.log( x1 )
    const dt = DateTime.now();
    const suma0 = dt.plus({ years: parseInt(x1) })
    console.log(suma0.toLocaleString(DateTime.DATETIME_SHORT))

    Swal.fire({
        title: suma0.toLocaleString(DateTime.DATETIME_SHORT) ,
        text: 'Es la Fecha de Vencimiento de su Contrato',
        icon: 'warning',
        confirmButtonText: 'OK'
})
})

