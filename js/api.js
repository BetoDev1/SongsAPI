import * as interfaz from './interfaz.js'

export default class API {
    constructor(artista, cancion){
        this.artista = artista
        this.cancion = cancion
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url).then(respuesta => respuesta.json())
                  .then(resultado => {
                        const { lyrics } = resultado

                        if (resultado.lyrics) {
                            interfaz.divResultado.textContent = lyrics
                            interfaz.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`
                        } else{
                            
                            interfaz.divMensajes.textContent = 'No se encontró la canción, prueba otra búsqueda'
                            interfaz.divMensajes.classList.add('error')
                        }

                        
                  })  

    }
}