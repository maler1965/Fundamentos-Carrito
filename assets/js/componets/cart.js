



function cart(db, printProducts) { //esta recibiendo estos parametros del archivo main.js
    let cart = []  // hara la funcion de base de datos, para despues poder seleccionar solo el id y la cantidad disponible, para indicar al usuario

    const productsDom = document.querySelector('.products__container')
    const notifyDom = document.querySelector('.notify')
    const cartDom = document.querySelector('.cart__body')
    const countDom = document.querySelector('.cart__count--item')
    const totalDom = document.querySelector('.cart__total--item')
    const checkoutDom = document.querySelector('.btn--buy')


    function printCart() {  //esto es para pintar en el carrito los productos seleccionados
        let htmlCart = ''

        if (cart.length === 0) {

            htmlCart += `
            <div class="cart__emply">
                    <i class='bx bx-cart'></i>
                    <p class="cart__emply--text">No hay productos en el carrito</p>
            </div>
            `
            notifyDom.classList.remove('show--notify')
        } else {
            for (const item of cart) {
                const product = db.find(p => p.id === item.id) //saca un producto entero de la base de datos, pero si una de sus claves coincide con la que tenemos, el id  
                htmlCart += `
                <article class="article">
                    <div class="article__image">
                        <img src="${product.image}"
                            alt="${product.name}">
                    </div>

                    <div class="article__content">
                        <h3 class="article__title">${product.name}</h3>
                        <span class="article__price">$${product.price}</span>

                        <div class="article__quantity">
                            <button type="button" class="article__quantity-btn article--minus" data-id="${item.id}">
                                <i class='bx bx-minus'> </i>
                            </button>

                            <span class="article__quantity-text">${item.contador}</span> 

                            <button type="button" class="article__quantity-btn article--plus" data-id="${item.id}">
                                <i class="bx bx-plus"> </i>
                            </button>

                        </div>

                        <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
                            <i class="bx bx-trash"> </i>
                        </button>

                    </div>

                </article>
                `
            }

            notifyDom.classList.add('show--notify')
        }
        cartDom.innerHTML = htmlCart
        notifyDom.innerHTML = showItemsCount()
        countDom.innerHTML = showItemsCount()
        totalDom.innerHTML = showTotal()

    }


    function addToCart(id, contador = 1) { //solo usara el id para identificar el producto
        const itemFinded = cart.find(i => i.id === id) //pregunta si el id que el usuario ha escogido es el mismo que ya existe en nuestra variable cart, que representa el carrito , da false o true 
        const noMas = db.find(p => p.id === id)

        if (itemFinded) {
            if (itemFinded.contador < noMas.quantity) {
                itemFinded.contador += contador
            } else {
                window.alert('No hay mas disponibles de este producto')
            }

        } else {
            cart.push({ id, contador })
        }


        printCart() //para poder ver en el carrito el producto que tiene ese id


    }

    //addToCart(2)


    function removeFromCart(id, contador = 1) {
        const itemFinded = cart.find(i => i.id === id)

        const result = itemFinded.contador - contador

        if (result > 0) {

            itemFinded.contador -= contador
        } else {

            cart = cart.filter(i => i.id !== id) // del carrito deja los demas articulos que no tienen este id, y borra el que tiene el id
        }

        printCart()
    }


    function deleteFromCart(id) {
        cart = cart.filter(i => i.id !== id)


        printCart()
    }


    function showItemsCount() {
        let suma = 0
        for (const item of cart) {
            suma += item.contador //ira contando o sumando todas las cantidades del contador de cada producto, hara un total, estamos sumando lo que tiene la llave contador
        }
        return suma
    }

    function showTotal() {
        let total = 0
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
            total = total + item.contador * productFinded.price
        }
        return total
    }


    function checkout() {

        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
            productFinded.quantity -= item.contador
        }

        cart = []
        printCart()
        printProducts()
        window.alert('Gracias por su compra')




    }

    printCart()

    //Eventos
    productsDom.addEventListener('click', function (e) {

        if (e.target.closest('.add--to--cart')) {
            const id = +e.target.closest('.add--to--cart').dataset.id
            addToCart(id)
        }
    })


    cartDom.addEventListener('click', function (e) {

        if (e.target.closest('.article--minus')) {
            const id = +e.target.closest('.article--minus').dataset.id
            removeFromCart(id)
        }

        if (e.target.closest('.article--plus')) {
            const id = +e.target.closest('.article--plus').dataset.id
            addToCart(id)
        }

        if (e.target.closest('.remove-from-cart')) {
            const id = +e.target.closest('.remove-from-cart').dataset.id
            deleteFromCart(id)
        }
    })


    checkoutDom.addEventListener('click', function () {
        if (cart.length > 0) {
            checkout()
        } else {
            window.alert('Aun no ha colocado un producto en su carrito')
        }
    })

}




export default cart


