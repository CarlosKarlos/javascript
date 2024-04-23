function contar(){
var txtf = document.querySelector('input#txtf')
var txti = document.querySelector('input#txti')
var txtp = document.querySelector('input#txtp')
var res = document.querySelector('div#res')
var fim = Number(txtf.value)
var inicio = Number(txti.value)
var passo = Number(txtp.value)


if ( fim <= 0) {
    res.innerHTML = 'Preencha <strong>fim</strong>  com valores maiores que zero!';
    res.style.color ='red'

   
} else if(passo > 4){
    // Limpa o conteúdo anterior da div
    res.innerHTML = '';
    res.style.color ='black'
    // Loop while para contar de inicio até fim com o passo especificado
    while (inicio <= fim) {
        res.innerHTML += `🏃‍♀️💨 ${inicio} `;
        inicio += passo;
    }
    res.innerHTML += ` 🚩`

}

        else if(passo <=0){
           window.alert('como passo é 0 ou menor que zero será considerado 1!')
           
            passo = 1

            res.style.color ='black'
    res.innerHTML = '';

        // Loop while para contar de inicio até fim com o passo especificado
        while (inicio <= fim) {
            res.innerHTML += `🚶‍♀️ ${inicio} `;
            inicio += passo;
        }
        
        // Adiciona o emoji de bandeira no final da contagem
        res.innerHTML += ` 🚩`
}
        

else{
    res.style.color ='black'
    res.innerHTML = '';

        // Loop while para contar de inicio até fim com o passo especificado
        while (inicio <= fim) {
            res.innerHTML += `🚶‍♀️ ${inicio} `;
            inicio += passo;
        }
        
        // Adiciona o emoji de bandeira no final da contagem
        res.innerHTML += ` 🚩`
}
}