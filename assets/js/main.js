
import loader from './componets/loader.js'  //esta importando del arichivo loader.js
import showMenu from './componets/showMenu.js'
import showCart from './componets/showCart.js'
import products from './componets/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './componets/cart.js'

loader() // esta usando lo que es ha importado

showMenu()  // esta usando lo que es ha importado

showCart()

const { db, printProducts } = products(await getProducts())  //con await javascript deja que se quede esperando que llegue el producto y puede seguir realizando los demas codigos
//con la llave despues de la const se indica que va a tomar solo esos datos del producto que esta esperando



//Carrito
cart(db, printProducts)


//Dark mode
const themeButton = document.getElementById('theme')

console.log(themeButton)

themeButton.addEventListener('click', function () {
    window.alert('click')
    document.body.classList.toggle('dark')//con toggle() se anade una clase que uno desee, y si ya existe lo quita

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.removeItem('theme')
    }


})
