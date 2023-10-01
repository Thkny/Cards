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



// adcioinar valor
const bonus = document.getElementById('bonus');
let porcentagem = 20
let resul = coiso.danoFisico + (coiso.danoFisico * porcentagem / 100)
let resul2 = coiso.danoDistancial + (coiso.danoDistancial * porcentagem / 100)
let resul3 = coiso.poderMagico + (coiso.poderMagico * porcentagem / 100)
let resul4 = coiso.poderPsiquico + (coiso.poderPsiquico * porcentagem / 100)

bonus.addEventListener('mouseover', function(){
    document.getElementById('dano').innerHTML = `Dano Fisico: +${resul}`
    document.getElementById('dano2').innerHTML = `Dano Distancial: +${resul2}`
    document.getElementById('dano3').innerHTML = `Poder Magico: +${resul3}`
    document.getElementById('dano4').innerHTML = `Poder Psiquico: +${resul4}`
    document.getElementById('dano').style.color = '#00d921'
    document.getElementById('dano2').style.color = '#00d921'
    document.getElementById('dano3').style.color = '#00d921'
    document.getElementById('dano4').style.color = '#00d921'


})

bonus.addEventListener('mouseout', function(){
    document.getElementById('dano').innerHTML = `Dano Fisico: ${coiso.danoFisico}`
    document.getElementById('dano2').innerHTML = `Dano Distancial: ${coiso.danoDistancial}`
    document.getElementById('dano3').innerHTML = `Poder Magico: ${coiso.poderMagico}`
    document.getElementById('dano4').innerHTML = `Poder Psiquico: ${coiso.poderPsiquico}`
    document.getElementById('dano').style.color = 'white'
    document.getElementById('dano2').style.color = 'white'
    document.getElementById('dano3').style.color = 'white'
    document.getElementById('dano4').style.color = 'white'

})