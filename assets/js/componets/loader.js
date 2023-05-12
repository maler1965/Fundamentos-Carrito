function loader() {


    window.addEventListener('load', function () {
        const loader = document.querySelector('.loader')
        loader.classList.add('loader--hidden')
    });  //en esta funcion se le aplica un metodo addEventlis de escuchar en el objeto window, no en el documento, que representa el sistema operativo, y el evento es load
    //load, espera a que esten cargados todos los recursos externos, como archivos que se traen de otras paginas web, etc. espera a que esten todos cargados.
    //luego document.querySelector carga en el archivo html la clase loader--hidden para anular al indicador loader
}

//el codigo todavia no hace nada en el archivo html porque solo se esta cargando la variable pero no se esta exportando nada aun
export default loader  //ahora si esta exportando, aunque aun no llega al archivo html porque no esta enlazado con la pagina, nadie lo esta llamando o usando
//hay  que ir al archivo js que si esta enlazado con html y llamarlo o importarlo



