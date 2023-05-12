



function products(products) {
    const db = [...products] //esto es para coger todos los productos que nos llegue para despues hacer una copia y utilizarlos

    function printProducts() { //esta funcion pinta los productos en la pagina web
        const productsDom = document.querySelector('.products__container') //con esto escojemos el elemento html donde se pondra los productos 

        let htmlProduct = ''

        for (let product of db) { //con esto recorremos la variable array que creamos que contiene todos los productos y los vamos guardando en la variable vacia que creamos
            htmlProduct += ` 
            <article class="product">
                    <div class="product__image">
                        <img src="${product.image}"
                            alt="${product.name}"> 
                    </div>

                    <div class="product__content">
                        <button type="button" class="product__btn add--to--cart"  data-id="${product.id}">
                            <i class="bx bx-cart-add"></i> 
                        </button>

                        <span class="product__price">$${product.price}</span>
                        <span class="product__stock">Disponible: ${product.quantity}</span>
                        <h3 class="product__title">${product.name}</h3>
                    </div>
                </article>
            
            
            ` //cuidado, usar comillas invertidas,       price
        }

        productsDom.innerHTML = htmlProduct  //para guardar el producto en la constante que tiene el elemento o contenedor que se trago del dom
    }

    printProducts()

    return { //retornamos estos datos para usarlos en otra actividad
        db,
        printProducts
    }
}

export default products

