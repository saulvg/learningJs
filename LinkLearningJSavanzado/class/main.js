'use strict'

const rutaImg = '../img/img.svg'

class Imagen {
    constructor(ruta){
        this.ruta = ruta
    }

    loadImg(){
        const img = document.createElement('img')
        img.src = this.ruta
        document.querySelector('.mainDiv').appendChild(img)
    }
}


const imagen = new Imagen(rutaImg)
imagen.loadImg()