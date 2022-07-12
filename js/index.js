document.querySelector('#calculo').addEventListener('click', () =>{
    let numero1 = parseInt(document.querySelector('#numero1').value)
    let numero2 = parseInt(document.querySelector('#numero2').value)
    let resultado = document.querySelector('#resultado').value

    let r = 0

    if(resultado == '+'){
        r = numero1 + numero2
    } else if( resultado == '-'){
        r = numero1 - numero2
    } else if( resultado == '*'){
        r = numero1 * numero2
    } else if( resultado == '/'){
        r = numero1 / numero2
    }
    alert(`El resultado de tu cálculo es ${r}`)
})

let demoraClick = parseInt(prompt('Ingresa cuantas veces pulsaras Ok para poder utilizar la calculadora'))

let i = 1

for(i = 1 ; i <= demoraClick ; i++){
    alert('Llevas ' + i + ' click')
}

