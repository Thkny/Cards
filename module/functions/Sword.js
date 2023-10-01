export class Sword {
    constructor() {
        this.danoFisico = 122
        this.danoDistancial = 2
        this.poderMagico = 34
        this.poderPsiquico = 3
    }
}

const coiso = new Sword 


// TENTATIVA DE MANIPULAR A JOÇA
document.getElementById('art').style.color = 'white'
document.getElementById('title').innerHTML = 'Paladino'


// DOM paia
document.getElementById('dano').innerHTML = `Dano Fisico: ${coiso.danoFisico}`
document.getElementById('dano2').innerHTML = `Dano Distancial: ${coiso.danoDistancial}`
document.getElementById('dano3').innerHTML = `Poder Magico: ${coiso.poderMagico}`
document.getElementById('dano4').innerHTML = `Poder Psiquico: ${coiso.poderPsiquico}`