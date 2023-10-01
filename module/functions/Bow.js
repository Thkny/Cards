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



// adcioinar valor
const bonus = document.getElementById('bonus2');
let porcentagem = 20
let resul = coiso2.danoFisico + (coiso2.danoFisico * porcentagem / 100)
let resul2 = coiso2.danoDistancial + (coiso2.danoDistancial * porcentagem / 100)
let resul3 = coiso2.poderMagico + (coiso2.poderMagico * porcentagem / 100)
let resul4 = coiso2.poderPsiquico + (coiso2.poderPsiquico * porcentagem / 100)

bonus.addEventListener('mouseover', function(){
    document.getElementById('2dano').innerHTML = `Dano Fisico: +${resul}`
    document.getElementById('2dano2').innerHTML = `Dano Distancial: +${resul2}`
    document.getElementById('2dano3').innerHTML = `Poder Magico: +${resul3}`
    document.getElementById('2dano4').innerHTML = `Poder Psiquico: +${resul4}`
    document.getElementById('2dano').style.color = '#00d921'
    document.getElementById('2dano2').style.color = '#00d921'
    document.getElementById('2dano3').style.color = '#00d921'
    document.getElementById('2dano4').style.color = '#00d921'
})

bonus.addEventListener('mouseout', function(){
    document.getElementById('2dano').innerHTML = `Dano Fisico: ${coiso2.danoFisico}`
    document.getElementById('2dano2').innerHTML = `Dano Distancial: ${coiso2.danoDistancial}`
    document.getElementById('2dano3').innerHTML = `Poder Magico: ${coiso2.poderMagico}`
    document.getElementById('2dano4').innerHTML = `Poder Psiquico: ${coiso2.poderPsiquico}`
    document.getElementById('2dano').style.color = 'white'
    document.getElementById('2dano2').style.color = 'white'
    document.getElementById('2dano3').style.color = 'white'
    document.getElementById('2dano4').style.color = 'white'
})