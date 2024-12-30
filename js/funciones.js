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




//