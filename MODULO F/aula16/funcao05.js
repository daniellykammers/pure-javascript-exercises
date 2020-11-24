function fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1) //RECURSIVAIDADE: FAZER CHAMADA PRA UMA FUNCTION DENTRO DELA MESMA
    }
}

console.log(fatorial(5))