function criartabuada() {
    var txtt = document.querySelector('#txtt');
    var select = document.querySelector('#tb');
    var num = document.querySelector('input#txtn')

    // Limpa o conteúdo atual do select
if(txtt.value.length == 0 ){

    window.alert('por favor, preencha os campos corretamente!')
}
   else{
   var numero = Number(txtt.value)
   var quantos = Number(num.value)
    select.innerHTML = '';
    
    for (var i = 0; i <= quantos; i++) {
        var option = document.createElement('option');
        var multiplicar = numero * i;
        option.text = `${numero} X ${i} = ${multiplicar}`;
        select.add(option);
        option.value = `tab${i}`
    }
}

}



