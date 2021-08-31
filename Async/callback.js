function saludo(nombre, myCallback) {
    setTimeout(function(){
        console.log('Hola ' + nombre)
        myCallback()
    }, 1000)
}

function despedida(nombre, otherCallback) {
    setTimeout(function(){
        console.log('Adiós ' + nombre)
        otherCallback()
    }, 1000)
}

console.log('Iniciando proceso...')
saludo('Vero', function(){
    despedida('Vero', function(){
        console.log('Terminando proceso...')
    })
})
