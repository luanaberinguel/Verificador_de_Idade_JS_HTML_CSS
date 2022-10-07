function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

       if (fsex[0].checked){
        genero = 'homem'
        if (idade>=0 && idade<12){
            //criança
            img.setAttribute('src','criancamenino.jpg')
        } else if (idade<29){
            //jovem
            img.setAttribute('src', 'jovemhomem.jpg')
        } else if(idade<65){
            //adulto
            img.setAttribute('src', 'adultohomem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.jpg')
        }

       } else if(fsex[1].checked){
        genero = 'mulher'
        if (idade>=0 && idade<12){
            //criança
            img.setAttribute('src', 'criancamenina.jpg')
        } else if (idade<29){
            //jovem
            img.setAttribute('src','jovemmulher.jpg')
        } else if(idade<65){
            //adulto
            img.setAttribute('src', 'adultamulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }  
}
