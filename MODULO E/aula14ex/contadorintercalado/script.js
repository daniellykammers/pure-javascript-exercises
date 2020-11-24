function contar(){
    let nstart = document.getElementById('numberstart')
    let nend = document.getElementById('numberend')
    let njump = document.getElementById('numberjump')
    let res = document.getElementById('res')
    
    if (nstart.value.length == 0 || nend.value.length == 0 || njump.value.length == 0){
        res.innerHTML = `Impossível contar!`
        //alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = 'Resultado: <br>'
        let start = Number(nstart.value)
        let end = Number(nend.value)
        let jump = Number(njump.value)

        if(jump <= 0){
            window.alert(`Pulo inválido! Considerando Pulo: 1.`)
            jump = 1
        }

        if (start < end) { //contagem progressiva
            for(let c = start; c <= end; c += jump){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else { //contagem regressiva
            for (let c = start; c >= end; c-= jump){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}