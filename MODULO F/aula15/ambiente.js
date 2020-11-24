let num = [5, 8, 2, 9, 6]
num.push(1)
num.sort()

console.log(num)
/*console.log(`o vetor tem ${num.length} elementos`)
console.log(`O primeiro vetor é ${num[0]}`)*/ //NÃO É INTERESSANTE MOSTRAR NO MOMENTO
let pos= num.indexOf(0)

if(pos == -1) {
    console.log(`O valor não foi encontrado!`) //para valores inexistentes
} else {
    console.log(`O valor 0 está na posição ${pos}`)
}