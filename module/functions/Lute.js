export class Lute {
    constructor() {
        this.danoFisico = 2
        this.danoDistancial = 23
        this.poderMagico = 34
        this.poderPsiquico = 98
    }
}

const coiso4 = new Lute

// TENTATIVA DE MANIPULAR A JOÇA
document.getElementById('art4').style.color = 'white'
document.getElementById('title4').textContent = 'Bardo'

// em obras bb
document.getElementById('4dano').innerHTML =  `Dano Fisico: ${coiso4.danoFisico}`
document.getElementById('4dano2').innerHTML = `Dano Distancial: ${coiso4.danoDistancial}`
document.getElementById('4dano3').innerHTML = `Poder Magico: ${coiso4.poderMagico}`
document.getElementById('4dano4').innerHTML = `Poder Psiquico: ${coiso4.poderPsiquico}`