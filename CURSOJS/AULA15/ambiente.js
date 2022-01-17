let num = [5,8,2,9,1]
num.sort()

console.log(`Nosso vetor tem ${num.length} elementos`);

for(let pos = 0; pos<num.length;pos++)
    console.log(num[pos])

console.log('2º Método')
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let a = num.indexOf(5)

if(a == -1){
    console.log('Valor não encontrado')
} else{
    console.log(`O Valor está na posição ${a}`)
}