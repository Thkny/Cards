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



// adcioinar valor
const bonus = document.getElementById('bonus3');
let porcentagem = 10
let resul = coiso3.danoFisico + (coiso3.danoFisico * porcentagem / 100)
let resul2 = coiso3.danoDistancial + (coiso3.danoDistancial * porcentagem / 100)
let resul3 = coiso3.poderMagico + (coiso3.poderMagico * porcentagem / 100)
let resul4 = coiso3.poderPsiquico + (coiso3.poderPsiquico * porcentagem / 100)

bonus.addEventListener('mouseover', function(){
    document.getElementById('3dano').innerHTML = `Dano Fisico: +${resul}`
    document.getElementById('3dano2').innerHTML = `Dano Distancial: +${resul2}`
    document.getElementById('3dano3').innerHTML = `Poder Magico: +${resul3}`
    document.getElementById('3dano4').innerHTML = `Poder Psiquico: +${resul4}`
    document.getElementById('p3').style.color = '#00d921'
})

bonus.addEventListener('mouseout', function(){
    document.getElementById('3dano').innerHTML = `Dano Fisico: ${coiso3.danoFisico}`
    document.getElementById('3dano2').innerHTML = `Dano Distancial: ${coiso3.danoDistancial}`
    document.getElementById('3dano3').innerHTML = `Poder Magico: ${coiso3.poderMagico}`
    document.getElementById('3dano4').innerHTML = `Poder Psiquico: ${coiso3.poderPsiquico}`
    document.getElementById('p3').style.color = 'white'
})