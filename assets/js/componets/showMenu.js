
function showMenu() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.nav__menu'); //con document.querySelector seleccionamos el elemento del archivo html para poder trabajar dentro de su contenedor 

    nav.addEventListener('click', function (e) { //escuchamos en el elemento nav del documento html el evento click
        //y luego de escuchar  le aplicamos una funcion.
        // en la funcion, el parametro e, es una breviacion de event, que representa el objeto que trae el evento
        //ahora se necesita hacer un if para preguntar si tiene lo que estamos buscando, puesto que al dar click se esta dando click al icono que esta dentro del contenedor boton, y lo que queremos es acceder al elemento boton
        //con el if preguntamos si el icono al que se hizo click, tiene dentro de su padre la clase que buscamos
        if (e.target.closest('.btn--menu')) {
            // closest hace una busqueda pero no solo en el elemento del objeto que recibe sino en el que esta en el nivel superior, es decir su padre
            menu.classList.toggle('show--menu'); //en el elemento menu le aplica la clase que queremos mediante un toggle que si esta abierto lo cierra y si esta cerrado lo abre.
        }

        if (e.target.closest('.btn--close')) {
            menu.classList.remove('show--menu');
        }

        if (e.target.closest('.nav__items')) {
            menu.classList.remove('show--menu');
        }
    })
}


// ahora se deja listo para exportar y que alguien lo reciba
export default showMenu;








