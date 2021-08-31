function async(myCallback) {
    setTimeout(function(){
        console.log('Estoy siendo asíncrona')
        myCallback()
    }, 1000)
}

console.log('Iniciando proceso...')
async(function(){
    console.log('Terminando proceso...')
})
