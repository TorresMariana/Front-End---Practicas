//CARRUSEL
const carrusel = document.querySelector('.carrusel');
const boton = document.querySelectorAll('.evento-boton');

// const i = 0
boton.forEach((cadaBoton, i) => {
    cadaBoton.addEventListener('click', function(){
        let posicion = i
        console.log('i: ',i);
        console.log('posicion:', posicion);
        let operacion = 33.33 + (posicion * -33.33);
        console.log('operacion:', operacion);

        carrusel.style.transform = `translateX(${operacion}%)`;

        boton.forEach((cadaBoton, i) =>{
            cadaBoton.style.color = '#a3a3a3';
        })
        cadaBoton.style.color = 'var(--marron)';
        

    })
});









//VALIDAR FORMULARIO DE CONTACTO
//declarar las variables
const nombreApellido = document.getElementById('nombre-apellido');
const correoElectronico = document.getElementById('email');
const fecha = document.getElementById('fecha');
const horario = document.getElementById('horario');
const cantidadPersonas = document.getElementById('cantidadPersonas');

//Fecha
// Obtener la fecha actual
var fechaActual = new Date();

// Obtener el año actual
var anioActual = fechaActual.getFullYear();
// Obtener el año siguiente
var anioSiguiente = anioActual + 1;

// Establecer la fecha mínima (hoy)
var fechaMinima = fechaActual.toISOString().split('T')[0]; // Convertir a formato YYYY-MM-DD

// Establecer la fecha máxima (31 de diciembre del mismo año)
var fechaMaxima = anioSiguiente + "-12-31"; // Fecha máxima 31 de diciembre

// Asignar las fechas mínima y máxima al input
fecha.setAttribute("min", fechaMinima);
fecha.setAttribute("max", fechaMaxima);

document.getElementById('formulario').addEventListener('submit', function(evento){
    evento.preventDefault();
    //cancela el evento si es cancelable, ¿qué significa esto? cualquier acción predeterminada que pertenece al evento no se llevará acabo.
    //Por ejemplo, esto puede ser útil cuando: Al hacer clic en un botón "Enviar", se evita que envíe un formulario.

    let erroresEncontrados = false;

    console.clear();
    console.log('-'.repeat(20));
    console.log('Error al enviar el formulario:');
    console.log('-'.repeat(20));

    //ocultar el mensaje error antes de realizar la validación
    document.getElementById('mensaje-error-nombre').style.display = 'none';
    document.getElementById('mensaje-error-email').style.display = 'none';
    document.getElementById('mensaje-error-fecha').style.display = 'none';
    document.getElementById('mensaje-error-horario').style.display = 'none';
    document.getElementById('mensaje-error-cantidad').style.display = 'none';

    //validamos
    if(!/^[a-zA-ZÀ-ÿ]{2,50}(?: [a-zA-Z]{2,50})*$/.test(nombreApellido.value)){
        document.getElementById('mensaje-error-nombre').style.display = 'block';
        console.log('Nombre y apellido incorrectos');
        erroresEncontrados = true;
    }
    if(!/^.+@.+\.com$/.test(correoElectronico.value)){
        document.getElementById('mensaje-error-email').style.display = 'block';
        console.log('Correo eléctronico incorrecto');
        erroresEncontrados = true;
    }
    if(horario.value < "00:00" || horario.value > "23:59"){
        document.getElementById('mensaje-error-horario').style.display = 'block';
        console.log('Horario incorrecto');
        erroresEncontrados = true;
    }
    if(!/^[0-9]{1,3}$/.test(cantidadPersonas.value)) {
    document.getElementById('mensaje-error-cantidad').style.display = 'block';
        console.log('Cantidad de personas incorrecta');
        erroresEncontrados = true;
    }


    //Validar fecha
    var fechaDate = new Date(fecha.value);
    var fechaMinDate = new Date(fechaMinima);
    var fechaMaxDate = new Date(fechaMaxima);

    if (fecha.value === "") {
        document.getElementById("mensaje-error-fecha").style.display = "block";
        console.log('Fecha incorrecta');
        erroresEncontrados = true;

    } else if (fechaDate < fechaMinDate || fechaDate > fechaMaxDate) {
        document.getElementById("mensaje-error-fecha").style.display = "block"; // Mostrar error si la fecha está fuera del rango
        console.log('Fecha fuera del rango');
        erroresEncontrados = true;
    }




    //Si no hubo errores, podemos continuar con el envío del formulario
    if(erroresEncontrados){
        console.log('-'.repeat(20));
    }
    else{
        console.clear();
        console.log('Formulario enviado exitosamente.');
        //resetear formulario
        document.getElementById('formulario').reset();
        //Mostrar mensaje enviado exitosamente
        // document.getElementById('mensaje-enviado').style.display = 'block';
        document.getElementById('mensaje-enviado').style.color = 'green';

        //Ocultar el mensaje después de 5 segundos
        setTimeout(()=>{
            // document.getElementById('mensaje-enviado').style.display = 'none';
            document.getElementById('mensaje-enviado').style.color = '#ffffff';
        }, 3000);
        //3000 milisegundos
    }

})
