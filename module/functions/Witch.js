export class Witch {
    constructor() {
        this.danoFisico = 18
        this.danoDistancial = 26
        this.poderMagico = 98
        this.poderPsiquico = 34
    }
}
 const coiso3 = new Witch

// TENTATIVA DE MANIPULAR A JOÇA
document.getElementById('art3').style.color = 'white'
document.getElementById('title3').textContent = 'Mago'

// DOM paia
document.getElementById('3dano').innerHTML = `Dano Fisico: ${coiso3.danoFisico}`
document.getElementById('3dano2').innerHTML = `Dano Distancial: ${coiso3.danoDistancial}`
document.getElementById('3dano3').innerHTML = `Poder Magico: ${coiso3.poderMagico}`
document.getElementById('3dano4').innerHTML = `Poder Psiquico: ${coiso3.poderPsiquico}`