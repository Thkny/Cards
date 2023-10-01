export class Bow {
    constructor() {
        this.danoFisico = 98
        this.danoDistancial = 132
        this.poderMagico = 4
        this.poderPsiquico = 1
    }
}

const coiso2 = new Bow

// TENTATIVA DE MANIPULAR A JOÇA
document.getElementById('art2').style.color = 'white'
document.getElementById('title2').textContent = 'Arqueiro'

// DOM paia
document.getElementById('2dano').innerHTML = `Dano Fisico: ${coiso2.danoFisico}`
document.getElementById('2dano2').innerHTML = `Dano Distancial: ${coiso2.danoDistancial}`
document.getElementById('2dano3').innerHTML = `Poder Magico: ${coiso2.poderMagico}`
document.getElementById('2dano4').innerHTML = `Poder Psiquico: ${coiso2.poderPsiquico}`