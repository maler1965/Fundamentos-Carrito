



async function getProducts() {
    //lo siguiente es la forma tradicional de recibir informacion externa

    /*return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => { console.log(err)}) */

    //exite otra forma, se le anade arriba la palabra async antes de la funcion al inicio y se escribe lo siguiente
    try { //try es por si hay algun error en la toma de informacion
        const res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
        const data = await res.json() //deja esperando la respuesta y cuando llegue que lo guarde en la constante data, pero primero lo combierte de json a javascript con la funcion json()
        return data
    } catch (error) {
        console.log(error)
    }


}

export default getProducts

