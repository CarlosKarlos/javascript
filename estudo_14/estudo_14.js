let num = [4,3,2,4,5]
num.push(7)
num.push(1)
console.log(`nosso vetor é o ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`organizando os valores em ordem crescente ${num.sort()}`)

/*
for(let pos = 0; pos < num.length; pos++){

    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for( let pos in num){

    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


