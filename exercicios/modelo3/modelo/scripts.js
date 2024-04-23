function contar(){
var txtf = document.querySelector('input#txtf')
var txti = document.querySelector('input#txti')
var txtp = document.querySelector('input#txtp')
var res = document.querySelector('div#res')
var fim = Number(txtf.value)
var inicio = Number(txti.value)
var passo = Number(txtp.value)


if ( fim <= 0 || passo <= 0) {
    res.innerHTML = 'Preencha <strong>fim</strong> e <strong>passo</strong> com valores maiores que zero!';
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