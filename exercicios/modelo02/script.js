
//função para verificar idade e genero selecionado
  
  function verificarGenero() {
    var res= document.querySelector('div#res')
    var selectGenero = document.getElementById("genero");
    var txtano = document.querySelector('input#txtano')
    var generoSelecionado = selectGenero.value;
    var dataN= Number(txtano.value)
    var agora = new Date()
    var anoatual = Number(agora.getFullYear())
    var idade = anoatual - dataN
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch (generoSelecionado) {
      case "homem":
          switch (true) {
              case idade < 10 && idade >0 :
                res.innerHTML =  `você é um homem de ${idade} anos!`;
                res.src = "";
                res.style.color = "#18E100"
                  break;
              case idade >= 11 && idade <= 18:
                res.innerHTML =  `você é um homem de ${idade} anos!`;
                res.src = "";
                res.style.color = "#18E100"
                  break;
              case idade >= 19 && idade <= 25:
                res.innerHTML =  `você é um homem de ${idade} anos!`;
                res.src = "";
                res.style.color = "#18E100"
                  break;
              case idade >= 26 && idade <= 45:
                res.innerHTML =  `você é um homem de ${idade} anos!`;
                res.src = '';
                res.style.color = "#18E100"
                  break; //
             
              case idade>= 46 && idade <= 125:
                res.innerHTML =  `você é um homem de ${idade} anos!`;
                res.style.color = "#18E100"
                break
                 default:
                res.innerHTML= `coloque uma idade válida!`
                res.style.color = "#E0130D";
                  break;
          }
          break;
          case "mulher":
            switch (true) {
                case idade < 10 && idade >0 :
                    res.innerHTML =  `você é uma mulher de ${idade} anos!`;
                    res.src = "";
                    res.style.color = "#18E100"
                    break;
                case idade >= 11 && idade <= 18:
                    res.innerHTML = `você é uma mulher de ${idade} anos!`;
                    res.src = "";
                    res.style.color = "#18E100"
                    break;
                case idade >= 19 && idade <= 25:
                    res.innerHTML = `você é uma mulher de ${idade} anos!`;
                    res.src = "";
                    res.style.color = "#18E100"
                    break;
                case idade >= 26 && idade <= 45:
                    res.innerHTML =  `você é uma mulher de ${idade} anos!`;
                    res.src = '';
                    res.style.color = "#18E100"
                    break;
                
                    case idade>= 46 && idade <= 125:
                      res.innerHTML =`você é uma mulher de ${idade} anos!`;
                      res.style.color = "#18E100"
                      break
                
                    default:
                      res.innerHTML= `coloque uma idade válida!`
                      res.style.color = "#E0130D";
                        break;
            }
            break;
      default:
        
  }
  }

