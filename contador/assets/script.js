var contadorMostrar = document.querySelector('.contador')

var contador = 0

var mais = document.querySelector('.mais')
var menos = document.querySelector('.menos')

document.querySelector('.contador').innerHTML = contador

mais.addEventListener('click', function () {
  contador = contador + 1
  contadorMostrar.innerHTML = contador
  if (contador == 0) {
    contadorMostrar.style.color = 'black'
  }
  if (contador < 0) {
    contadorMostrar.style.color = 'red'
  }
  if (contador > 0) {
    contadorMostrar.style.color = 'green'
  }
})

menos.addEventListener('click', function () {
  contador = contador - 1
  contadorMostrar.innerHTML = contador
  if (contador == 0) {
    contadorMostrar.style.color = 'black'
  }
  if (contador < 0) {
    contadorMostrar.style.color = 'red'
  }
  if (contador > 0) {
    contadorMostrar.style.color = 'green'
  }
})
