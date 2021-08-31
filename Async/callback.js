function saludo(nombre, myCallback) {
    setTimeout(function(){
        console.log('Hola ' + nombre)
        myCallback()
    }, 1000)
}

console.log('Iniciando proceso...')
saludo('Vero', function(){
    console.log('Terminando proceso...')
})
