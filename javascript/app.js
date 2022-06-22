let submit = document.getElementById('submit')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let number = document.getElementById('number')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')
let radSex = document.getElementsByName('gender')

submit.addEventListener('click', function(){
    checkInputs()
})

function checkInputs() {
    let firstnameValue = firstname.value 
    let lastnameValue = lastname.value 
    let emailValue = email.value 
    let numberValue = number.value 
    let passwordValue = password.value 
    let passworConfimationdValue = passwordConfirmation.value 

    if(firstnameValue === '') {
        setErroFor(firstname, 'O nome do usuário é obrigatorio.')
    }
}

function setErroFor(input, message) {
    let inputBox = input.parentElement
    let  small = inputBox.querySelector('smail')

    //messagem de erro
    small.innerText = 'message'

    //adicionar a class de erro
    inputBox.className = 'input-box error'
}

function setErroFor() {
    let inputBox = input.parentElement//retorna a div pai do input (input-box)

    //adcionar a class de success
    inputBox.className = 'input-box success'
}


