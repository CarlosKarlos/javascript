var numeros = [];

        // Verifica se o número está entre 0 e 100
        function verificarNumero(numero) {
            return numero >= 0 && numero <= 100;
        }

        function adicionar() {
            var valor = parseInt(document.getElementById("txtn").value);

            if (isNaN(valor)) {
                window.alert('Por favor, insira um número válido!');
                return;
            }

            if (!verificarNumero(valor)) {
                window.alert('Por favor, insira um número entre 0 e 100!');
                return;
            }

            var posicao = numeros.indexOf(valor);

            if (posicao !== -1) {
                window.alert('O número já está na lista!');
                return;
            }

            numeros.push(valor);
            var res = document.querySelector('div#res')
            var select = document.getElementById("select");
            var option = document.createElement('option');
            option.text = `O número ${valor} foi adicionado`;
            select.add(option);
            res.innerHTML = ''
        }
      
        function organizar(){
           return numeros.sort();
        
        
        }
        
   function finalizar(){
        organizar()

   if(numeros.length === 0){

    window.alert('Por favor, preencha a tabela com ao menos um número!')
   }
        
   
   else{
    
    res.innerHTML = ''
       

        let primeiraPosicao = numeros[0];

        let total = numeros.length;
      
        let ultimaPosicao = numeros[numeros.length - 1];

        let soma = 0;
       
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        let media = soma / total;

        res.innerHTML += `<br>Ao todo, temos ${total} números cadastrados.<br>`
        res.innerHTML += `<br>O maior valor informado foi ${ultimaPosicao}.<br>`
        res.innerHTML += `<br>O menor número informado foi ${primeiraPosicao}.<br>`
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `<br>A média dos valores digitados é ${media}.<br>`
    
    }
       
    }

    function resetar(){


     res.innerHTML = ''

     select.innerHTML = ''
     numeros = []
    }