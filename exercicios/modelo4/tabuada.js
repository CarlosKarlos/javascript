function criartabuada() {
    var txtt = document.querySelector('#txtt');
    var select = document.querySelector('#tb');
    

    // Limpa o conteúdo atual do select
if(txtt.value.length == 0 ){

    window.alert('por favor, preencha os campos!')
}
   else{
   var numero = Number(txtt.value)

    select.innerHTML = '';
    
    for (var i = 0; i <= 10; i++) {
        var option = document.createElement('option');
        var multiplicar = numero * i;
        option.text = `${numero} X ${i} = ${multiplicar}`;
        select.add(option);
        option.value = `tab${i}`
    }
}

}



