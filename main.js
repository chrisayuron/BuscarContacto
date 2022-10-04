//Dado el siguiente arreglo de objetos, realizar una función que permita buscar y ver las propiedades de un contacto, según el nombre escrito y la propiedad seleccionada al hacer clic en el botón buscar. En caso de que se seleccionen todas las propiedades en el elemento select, deben mostrarse todas las propiedades con sus respectivos valores. Si solo se selecciona una, se debe mostrar solo esa propiedad con su respectivo valor. Si el contacto no existe, escribir el texto, no encontrado. Si los datos no se digitaron completos, mostrar una alerta indicando que los datos no están completos. Al hacer click sobre el input nombre, se debe vaciar todos los elementos.

const contacto = [
    {
        nombre: "Ronald",
        apellido: "Nav",
        numero: "313265498",
        gustos: ['pizza', 'programación', 'enseñar']
      
    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372684',
        gustos: ['Hogwarts', 'magia']
    },

    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['clases interesantes', 'violin']
    },
    {
        nombre: 'Goku',
        apellido: '',
        numero: '123412523',
        gustos: ['Artes Marciales', 'Milk', 'Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: ['Correr superrapido', '	Iris West', 'Misterios']
    },
    {
        nombre: 'Tony',
        apellido: 'Star',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },

]
const buscar = document.getElementById('btn')
let result = document.getElementById('result')

let nombre = document.getElementById('nombre').addEventListener('focus', () => {
    result.innerHTML = ''
    document.getElementById('nombre').value = ''
    document.getElementById('propiedad').selectedIndex = 'ninguno'
})

buscar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value
    let propiedad = document.getElementById('propiedad').options[document.getElementById('propiedad').selectedIndex].value
    buscarPerfil(nombre, propiedad)
})


function buscarPerfil(nombre, propiedad) {
    let noencontrado = 0
    if (propiedad === 'ninguno' || nombre === '') {
        alert('No ha llenado los campos correctamente')
    } else {
        for (let i = 0; i < contacto.length; i++) {
            if (contacto[i].nombre.toUpperCase() === nombre.toUpperCase()) {
                if (propiedad === 'todos') {
                    for (val in contacto[i]) {
                        result.innerHTML += val + ': ' + contacto[i][val] + '<br>'
                    }

                } else {
                    result.innerHTML = `${propiedad.toUpperCase()}:${contacto[i][propiedad]}`
                }

                break;

            } else {
                noencontrado++
            }
        }
        if (noencontrado === contacto.length) {
            result.innerHTML = 'No encontrado'
        }

    }
}