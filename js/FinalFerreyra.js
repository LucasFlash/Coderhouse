


// Declaracion de Variables*/

let suma=0;
let num1=100;
let num2=200;
let num3=400;
let anio0=2022;

let precio_final=0;
let iva0=0;

let precios=0;
let ivas=0;
let total;




//Variables a partir del input


let nomApe = document.getElementById("nomApe")
nomApe.addEventListener("input", () => {
    console.log(nomApe.value)
}) 


let anios = document.getElementById("anios")
anios.addEventListener("input", () => {
    let n2JSON = JSON.stringify(anios.value);
	localStorage.setItem("anios", n2JSON);
    console.log(anios.value)
    
}) 


let tipoServicio = document.getElementById("tipoServicio")
tipoServicio.addEventListener("input", () => {
    let n3JSON = JSON.stringify(tipoServicio.value);
	localStorage.setItem("tipoServicio", n3JSON);
    console.log(tipoServicio.value)
}) 




const paises = ["Argentina", "Brasil", "Mexico", "RestoLatam"];
let preciosFinal = [0];


const servicios = [

	{nombre: "Basico", id: "1", horasDiarias: 12, numDispositivos: 1, descApp: 25},
	{nombre: "Completo", id: "2", horasDiarias: 18, numDispositivos: 3, descApp: 50},
	{nombre: "Premiun", id: "3", horasDiarias: 24, numDispositivos: 6, descApp: 75},

]


//Aplicando Spread y Destructuracion

const serviciosBasico = 

	{nombre: "Basico", horasDiarias: 12, numDispositivos: 1, descApp: 25}

const serviciosBasico2 = {
	...serviciosBasico
}


///


//Resultados*/


const iva = x => x * 0.21; 



function anioFin(anios){
  let resultanio = 2022 + parseInt(anios);
  return resultanio;
}  



// Operador AND
servicios.length === 3 && console.log("Hay tres tipos de servicio")


// Trabajando con Librerias: DayJs, Luxon y SweetAlert

// Fecha del dia de hoy

g = dayjs.locale()
console.log(g)
let now = dayjs()


nn = dayjs(now).format('dddd D MMMM YYYY')

let n1 = document.getElementById("n1")

n1.innerHTML = nn

yy = dayjs(now).format('D M YYYY')



// Inicio Libreria Luxon
const DateTime = luxon.DateTime


// Boton que al presionarlo muestra un alerta con la fecha de Vencimiento del contrato
// La fecha se calcula con Luxon teniendo en cuenta la cantidad de años que el cliente
// decide ingresar en el input anteriormente cofeccionado.

let btn1 = document.querySelector('#bt1')
btn1.addEventListener('click', () => {

    const x1 = anios.value    
    if(x1 > 0){
      console.log( x1 )
      const dt = DateTime.now();
      const suma0 = dt.plus({ years: parseInt(x1) })
      console.log(suma0.toLocaleString(DateTime.DATETIME_SHORT))

    Swal.fire({
        title: suma0.toLocaleString(DateTime.DATETIME_SHORT) ,
        text: 'Es la Fecha de Vencimiento de su Contrato',
        icon: 'success',
        confirmButtonText: 'OK'
    })} else {
      Swal.fire({
        title: "Ingrese los Datos Necesarios" ,
        text: ' ',
        icon: 'error',
        confirmButtonText: 'OK'
    })}
})



// Calculo Precio Final segun el tipo de Servicio
// A partir de un boton, con los datos ingresados, y usando tambien sweet alert 2

let bt2 = document.getElementById("bt2")

bt2.onclick = () => { 

  let anioxx  = document.getElementById("anios")
  anioxx = anioxx.value  
  if(anioxx <= 0){
  Swal.fire({
    title: "Ingrese los Datos Necesarios" ,
    text: ' ',
    icon: 'error',
    confirmButtonText: 'OK'
  })} else {
  
	let servicio = document.getElementById("tipoServicio").value;

  switch(servicio){


    //Servicio Basico*/
    
 case "Básico":


function s1(num1){
  let resultado = parseInt(num1) + parseInt(num1*0.3);
  return resultado;
}
 

let aniox1  = document.getElementById("anios")
aniox1 = aniox1.value
console.log(aniox1)


preciosFinal.push( 100 );

do {
  preciosFinal.push( s1(num1) );
  num1=s1(num1);
  console.log( s1(num1) );
  aniox1=aniox1-1;
}
while (anio0 < anio0+aniox1);
console.log(preciosFinal)

let c1=0;
for (let j=0; j<preciosFinal.length; j++){
  c1=parseInt(preciosFinal[j]);
  precio_final=precio_final+c1;
  console.log(precio_final);
  }
  
  console.log(precio_final)
  iva0=iva( precio_final )
  
  ivas=iva0
  precios=precio_final
  total=ivas+precios

  console.log(iva0)
  console.log(precio_final)

  iva0=0
  precio_final=0
  preciosFinal=[0]
  num1=100
  aniox1 = aniox1.value

  console.log(total)

  Swal.fire({
    title: "Precio de Suscripcion" ,
    text: "Subtotal: $"+ precios+ " || "+"IVA: $"+ ivas+" || "+             "Total: $"+ total,
    icon: 'success',
    confirmButtonText: 'OK'
})

break; 


//Servicio Completo*/

case "Completo":


  function s2(num2){
    let resultado = parseInt(num2) + parseInt(num2*0.3);
    return resultado;
  }
   
  
  let aniox2  = document.getElementById("anios")
  aniox2 = aniox2.value
  console.log(aniox2)
  

  preciosFinal.push( 200 );
  
  do {
    preciosFinal.push( s2(num2) );
    num2=s2(num2);
    console.log( s2(num2) );
    aniox2=aniox2-1;
  }
  while (anio0 < anio0+aniox2);
  console.log(preciosFinal)
  
  let c2=0;
  for (let j=0; j<preciosFinal.length; j++){
    c2=parseInt(preciosFinal[j]);
    precio_final=precio_final+c2;
    console.log(precio_final);
    }
    
    console.log(precio_final)
    iva0=iva( precio_final )
    
    ivas=iva0
    precios=precio_final
    total=ivas+precios
  
    console.log(iva0)
    console.log(precio_final)
  
    iva0=0
    precio_final=0
    preciosFinal=[0]
    num2=200
    aniox2 = aniox2.value
  
    console.log(total)

    Swal.fire({
      title: "Precio de Suscripcion" ,
      text: "Subtotal: $"+ precios+ " || "+"IVA: $"+ ivas+" || "+             "Total: $"+ total,
      icon: 'success',
      confirmButtonText: 'OK'
  })
  

break;


//Servicio Premiun*/

case "Premium":


  function s3(num3){
    let resultado = parseInt(num3) + parseInt(num3*0.3);
    return resultado;
  }
   
  
  let aniox3  = document.getElementById("anios")
  aniox3 = aniox3.value
  console.log(aniox3)
  
 
  preciosFinal.push( 400 );
  
  do {
    preciosFinal.push( s3(num3) );
    num3=s3(num3);
    console.log( s3(num3) );
    aniox3=aniox3-1;
  }
  while (anio0 < anio0+aniox3);
  console.log(preciosFinal)
  
  let c3=0;
  for (let j=0; j<preciosFinal.length; j++){
    c3=parseInt(preciosFinal[j]);
    precio_final=precio_final+c3;
    console.log(precio_final);
    }
    
    console.log(precio_final)
    iva0=iva( precio_final )
    
    ivas=iva0
    precios=precio_final
    total=ivas+precios
  
    console.log(iva0)
    console.log(precio_final)
  
    iva0=0
    precio_final=0
    preciosFinal=[0]
    num3=400
    aniox3 = aniox3.value
  
    console.log(total)

    Swal.fire({
      title: "Precio de Suscripcion" ,
      text: "Subtotal: $"+ precios+ " || "+"IVA: $"+ ivas+" || "+             "Total: $"+ total,
      icon: 'success',
      confirmButtonText: 'OK'
  })
  

break;

default:

console.log("Error, Ingrese una Opción Valida");
Swal.fire({
  title: "Ingrese los Datos Necesarios" ,
  text: ' ',
  icon: 'error',
  confirmButtonText: 'OK'
})
break; 
}
}
}


// Mostrar / Ocultar Detalles de cada tipo de servicio

const mostrar1 = document.querySelector("#btnSearch1");
const mensaje1 = document.querySelector(".b1");

mostrar1.addEventListener("click", () => {
  mensaje1.classList.toggle("b1");
});

const mostrar2 = document.querySelector("#btnSearch2");
const mensaje2 = document.querySelector(".b2");

mostrar2.addEventListener("click", () => {
  mensaje2.classList.toggle("b2");
});

const mostrar3 = document.querySelector("#btnSearch3");
const mensaje3 = document.querySelector(".b3");

mostrar3.addEventListener("click", () => {
  mensaje3.classList.toggle("b3");
});



/// Formulario para Email JS

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  console.log(forms)

  console.log(Array.from(forms)) 
  // Loop over them and prevent submission
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        Swal.fire({
          imageUrl: '../img/logo1.png',
          imageHeight: 80,
          imageWidth: 80,
          background: '#be1e24',
          width: 300,
          title: `<h5 class="text-warning">Error al completar el formulario de contacto.
          Verifique los datos ingresados.</h5>`,
          showConfirmButton: true,
        })
      }
      else{
      event.preventDefault()
      const enviarSolicitud = document.getElementById('enviar-solicitud');
      let nomApe = document.getElementById('nomApe');
      let email = document.getElementById('email');
      let anios = document.getElementById('anios');
      let tipoServicio = document.getElementById('tipoServicio');
      let pais = document.getElementById('pais');
      
      
      // event.preventDefault();//evitamos que se ejecute la funcion predeterminada por defecto del evento

      enviarSolicitud.value = 'Procesando...';

      //Enviamos informacion en forma de parametros a traves de la url, datos ingresados por usuario y calculo de precio total
      let params = {
          user_id: 'MkKm5dMRcgeUaT_Iv',
          service_id: 'service_i9wcomy',
          template_id: 'template_utifx79',
          template_params: {
          NomApe: nomApe.value,
          email: email.value,
          tipoServicio: tipoServicio.value,
          anios: anios.value,
          pais: pais.value,
          total: total
          }
      };
  
      let headers = {
          'Content-type': 'application/json'/*Tenemos la propiedad Content-type, con el valor que nos indica
          la documentacion de la API*/
      };
  
      //Definimos el segundo parametro opcional del fetch de tipo object en el cual transferimos datos en formato JSON
      let options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(params)
      };
  
      fetch('https://api.emailjs.com/api/v1.0/email/send', options)
      .then(async (httpResponse) => {//Con async-await esperamos a que se resuelva la promesa para continuar con la siguiente instruccion
          if (httpResponse.ok) {
              

              setTimeout(() => {
                  enviarSolicitud.value = 'Enviar';
                  Swal.fire({
                      imageUrl: '../img/logo.png',
                      imageHeight: 80,
                      imageWidth: 80,
                      background: '#be1e24',
                      width: 300,
                      title: '<h5 class="text-warning">Formulario enviado</h5>',
                      showConfirmButton: true,
                  }).then(function () {
                      window.location.href = "../index.html";
                  })

              }, 2000);


          } else {
              const text = await httpResponse.text();
              return await Promise.reject(text);
          }
      })
      .catch((error) => {
          enviarSolicitud.value = 'Enviar';
          console.log(error)
          Swal.fire({
              imageUrl: '../img/logo.png',
              imageHeight: 80,
              imageWidth: 80,
              background: '#be1e24',
              width: 300,
              title: `<h5 class="text-warning">No se pudo realizar el envio del formulario. Intente nuevamente.</h5>`,
              showConfirmButton: true,
            })
      });
      }
      
          
      
      
      
      form.classList.add('was-validated')
    }, false)
  })
})()