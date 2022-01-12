function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        img.src = 'bomdia.png'
        document.body.style.background = '#d8c799'
    } else if (hora>= 12 && hora < 18) {
        img.src = 'boatarde.png'
        document.body.style.background = '#6b522e'
    } else {
        img.src = 'boanoite.png'
        document.body.style.background = '#956791'
    }

}
