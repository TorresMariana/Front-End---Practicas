//SHOP_NOW: acordeon
const descripcion = document.getElementById('descripcion');
const boton = document.getElementById('ver-mas');
const texto = document.getElementById('texto-2');

// let height = 0;
// descripcion.addEventListener('click', () =>{
//     //si la altura está en 0, se muestra el contenido
//     if(height===0){
//         height = texto.scrollHeight;
//         boton.value = 'VIEW LESS'; //cambiamos el valor de input
//     }
//     else{
//         height = 0;
//         // boton.value = 'VIEW MORE'; //cambiamos el valor de input
//     }

//     texto.style.height =`${height}px` // Aplicamos la altura al contenido
// });





texto.style.display = 'none';
descripcion.addEventListener('click', () =>{
    //si la altura está en 0, se muestra el contenido
    if(texto.style.display === 'none'){
        texto.style.display = 'block';
        boton.value = 'VIEW LESS'; //cambiamos el valor de input
    }
    else{
        texto.style.display = 'none';
        boton.value = 'VIEW MORE'; //cambiamos el valor de input
    }
});




// // Inicializamos el contenido oculto
// texto.classList.remove('mostrar');

// descripcion.addEventListener('click', () => {
//     // Si el contenido está oculto, lo mostramos
//     if (!texto.classList.contains('mostrar')) {
//         texto.classList.add('mostrar'); // Mostramos el contenido
//         boton.value = 'VIEW LESS'; // Cambiamos el texto del botón
//     } else {
//         texto.classList.remove('mostrar'); // Ocultamos el contenido
//         boton.value = 'VIEW MORE'; // Cambiamos el texto del botón
//     }
// });





