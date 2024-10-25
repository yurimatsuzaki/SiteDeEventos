let selectCidaede = document.getElementById('cidade')
let btnIniciar = document.getElementById('iniciar')
let linkHome = document.getElementById('LinkHome')
let AlertCity = document.getElementById('selectCity')
let btnCloseCity = document.getElementById('fecharDialog')

btnIniciar.addEventListener('click', function(){
    if(selectCidaede.value == 0){
        AlertCity.showModal()

        btnCloseCity.addEventListener('click', function(){
            AlertCity.close()
        })
    }else{
        linkHome.setAttribute("href", "cadastro.html")
    }
})