function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hello = window.document.getElementById('hello')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=6 && hora <12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#feb665'
        hello.innerHTML = `Bom dia!`
    } else if(hora >=12 && hora <18) {
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#a53d02'
        hello.innerHTML = `Boa tarde!`
    } else if (hora >18 && hora <=23) {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#0a181a'
        hello.innerHTML = `Boa noite!`
    }else { 
        //Boa madrugs
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#131313'
        hello.innerHTML = `Não é melhor ir dormir?!!`
    }
}
