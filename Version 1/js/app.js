//SHOP_NOW: Boton ver más
const descripcion = document.getElementById('descripcion');
const boton = document.getElementById('ver-mas');
const texto = document.getElementById('texto-2');

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









