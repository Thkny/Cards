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

// DOM paia
document.getElementById('4dano').innerHTML =  `Dano Fisico: ${coiso4.danoFisico}`
document.getElementById('4dano2').innerHTML = `Dano Distancial: ${coiso4.danoDistancial}`
document.getElementById('4dano3').innerHTML = `Poder Magico: ${coiso4.poderMagico}`
document.getElementById('4dano4').innerHTML = `Poder Psiquico: ${coiso4.poderPsiquico}`



// adcioinar valor
const bonus = document.getElementById('bonus4');
let porcentagem = 10
let resul = coiso4.danoFisico + (coiso4.danoFisico * porcentagem / 100)
let resul2 = coiso4.danoDistancial + (coiso4.danoDistancial * porcentagem / 100)
let resul3 = coiso4.poderMagico + (coiso4.poderMagico * porcentagem / 100)
let resul4 = coiso4.poderPsiquico + (coiso4.poderPsiquico * porcentagem / 100)

bonus.addEventListener('mouseover', function(){
    document.getElementById('4dano').innerHTML = `Dano Fisico: +${resul}`
    document.getElementById('4dano2').innerHTML = `Dano Distancial: +${resul2}`
    document.getElementById('4dano3').innerHTML = `Poder Magico: +${resul3}`
    document.getElementById('4dano4').innerHTML = `Poder Psiquico: +${resul4}`
    document.getElementById('p4').style.color = '#00d921'
})

bonus.addEventListener('mouseout', function(){
    document.getElementById('4dano').innerHTML = `Dano Fisico: ${coiso4.danoFisico}`
    document.getElementById('4dano2').innerHTML = `Dano Distancial: ${coiso4.danoDistancial}`
    document.getElementById('4dano3').innerHTML = `Poder Magico: ${coiso4.poderMagico}`
    document.getElementById('4dano4').innerHTML = `Poder Psiquico: ${coiso4.poderPsiquico}`
    document.getElementById('p4').style.color = 'white'
})