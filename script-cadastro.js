let BTNentrar = document.getElementsByClassName('Entrar')[0]
let BTNCadastrar = document.getElementById('BtnCadastro')
let inputName = document.getElementById('username')
let inputCel = document.getElementById('celular')
let inputEmail = document.getElementById('email')
let inputCpf = document.getElementById('cpf')
let inputSenha = document.getElementById('senha')
let inputConfirmarSenha = document.getElementById('ConfirmarSenha')

const alertCampVazio = document.getElementById('CampVazio')
const btnFechar1 = document.getElementsByClassName('btnFechar')[0]
const alertSenhaIncorreta = document.getElementById('SenhasDif')
const btnFechar2 = document.getElementsByClassName('btnFechar')[1]

BTNentrar.addEventListener('click', function(){
    if(inputName.value == 0 || inputCel.value == 0 || inputEmail.value == 0 || inputCpf.value == 0 || inputSenha.value == 0 || inputConfirmarSenha.value == 0){
        alertCampVazio.showModal()
        btnFechar1.addEventListener('click', function(){
            alertCampVazio.close()
        })
    }else if(inputSenha.value != inputConfirmarSenha.value){
        alertSenhaIncorreta.showModal()
        btnFechar2.addEventListener('click', function(){
            alertSenhaIncorreta.close()
        })
    }else{
        BTNCadastrar.setAttribute("href", "login.html")
    }
})