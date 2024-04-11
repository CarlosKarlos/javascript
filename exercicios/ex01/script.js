


function mudarimagem(){
    var agora = new Date()
   
   
    var hora = agora.getHours()
    
    var imagem= window.document.querySelector('img#foto')
    
    var msg = window.document.getElementById('msg')

    var body= window.document.querySelector('body')
    
   
    if(hora >= 0 && hora < 12 ){
        msg.innerHTML= `agora são <strong> ${hora}</strong> horas! bom dia!`
     imagem.src='imagemdamanha.png'
     body.style.background='#E8BD61'
     
    }
    else if(hora >= 12 && hora <= 18){
    
        msg.innerHTML= `agora são <strong>${hora} </strong>horas! boa tarde!!`
        imagem.src='imagemdetarde.png'
        body.style.background='#EA5E00'
    }
    else{
        msg.innerHTML= `agora são <strong>${hora} </strong>horas! boa noite!!`
        img.src='imagemanoite.png'
        body.style.background='#0D00EA'
    }
 
}