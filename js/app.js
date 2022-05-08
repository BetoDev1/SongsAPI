import * as interfaz from './interfaz.js'
import API from './api.js'

interfaz.formularioBuscar.addEventListener('submit', buscarCancion)

function buscarCancion(e){
    e.preventDefault()

    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if (artista ===''||cancion==='') {
        interfaz.divMensajes.textContent='Error, ambos campos son obligatorios'
        interfaz.divMensajes.classList.add('error')

        setTimeout(()=>{
            interfaz.divMensajes.textContent=''
            interfaz.divMensajes.classList.remove('error')
        }, 2000)
    }

    const busqueda = new API(artista, cancion)
    busqueda.consultarAPI()
}