//PLANNING: botón Explore
const contenedor = document.querySelector('aside');
const boton = document.getElementById('ver-mas');
const texto = document.getElementById('texto-explore');

texto.style.display = 'none';
contenedor.addEventListener('click', () =>{
    if(texto.style.display === 'none'){
        texto.style.display = 'block';
    }
    else{
        texto.style.display = 'none';
    }
});