
var agora = new Date()
var hora = agora.getHours()



if(hora >= 6 && hora <= 12 ){

    console.log(`agora são exatamente ${hora} horas! Bom dia!`)
}
else if(hora >= 13 && hora <= 18){

    console.log(`agora são exatamente ${hora} horas! Boa tarde!`)
}
else if(hora < 5){

    console.log(`agora são exatamente ${hora} horas! Boa madrugada!`)
}
else{
    console.log(`agora são exatamente ${hora} horas! Boa noite!`)
}