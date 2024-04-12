
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
    
    
    switch (generoSelecionado) {
      case "homem":
          switch (true) {
              case idade < 10 && idade >0 :
                res.innerHTML = `você  tem ${idade} anos e está na na infância!`;
                res.src = "";
                res.style.color = "#18E100"
                  break;
              case idade >= 11 && idade <= 18:
                res.innerHTML = `você tem ${idade} anos e está na adolescência!`;
                res.src = "";
                res.style.color = "#18E100"
                  break;
              case idade >= 19 && idade <= 25:
                res.innerHTML = `você tem ${idade} anos e é um jovem adulto!`;
                res.src = "";
                res.style.color = "#18E100"
                  break;
              case idade >= 26 && idade <= 45:
                res.innerHTML =  `você tem ${idade} anos e é um adulto!`;
                res.src = '';
                res.style.color = "#18E100"
                  break; //
             
              case idade>= 46 && idade <= 125:
                res.innerHTML = `você tem ${idade} anos e é um senhor de idade!`;
                res.style.color = "#18E100"

                 default:
                res.innerHTML= `coloque uma idade válida pois é impossivel que tenha ${idade} anos!`
                res.style.color = "#E0130D";
                  break;
          }
          break;
          case "mulher":
            switch (true) {
                case idade < 10 && idade >0 :
                    res.innerHTML = `você tem ${idade} anos e está na infância!`;
                    res.src = "";
                    res.style.color = "#18E100"
                    break;
                case idade >= 11 && idade <= 18:
                    res.innerHTML = `você tem ${idade} anos e está na adolescência!`;
                    res.src = "";
                    res.style.color = "#18E100"
                    break;
                case idade >= 19 && idade <= 25:
                    res.innerHTML = `você tem ${idade} anos e é uma jovem adulta!`;
                    res.src = "";
                    res.style.color = "#18E100"
                    break;
                case idade >= 26 && idade <= 45:
                    res.innerHTML =  `você tem ${idade} anos e é uma adulta!`;
                    res.src = '';
                    res.style.color = "#18E100"
                    break;
                
                    case idade>= 46 && idade <= 125:
                      res.innerHTML = `você tem ${idade} anos e é um senhora de idade!`;
                      res.style.color = "#18E100"
                
                    default:
                      res.innerHTML= `coloque uma idade válida pois é impossivel que tenha ${idade} anos!`
                      res.style.color = "#E0130D";
                        break;
            }
            break;
      default:
          res.innerHTML='selecione e coloque a idade!'
          break;
  }
  }

