let LinkEntrar = document.getElementById('EntrarLink')
let BTNentrar = document.getElementById('EntrarBTN')
let inputName = document.getElementById('username')
let inputSenha = document.getElementById('senha')

const alertCampVazio = document.getElementById('CampVazio')
const btnFechar1 = document.getElementsByClassName('btnFechar')[0]
const alertSenhaIncorreta = document.getElementById('SenhasIncorreta')
const btnFechar2 = document.getElementsByClassName('btnFechar')[1]

BTNentrar.addEventListener('click', function(){
    if(inputName.value == 0 || inputSenha.value == 0){
        alertCampVazio.showModal()
        btnFechar1.addEventListener('click', function(){
            alertCampVazio.close()
        })
    }else if(inputSenha.value != 'siptop'){
        alertSenhaIncorreta.showModal()
        btnFechar2.addEventListener('click', function(){
            alertSenhaIncorreta.close()
        })
    }else{
        LinkEntrar.setAttribute("href", "cadastro.html")
    }
})