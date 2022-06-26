let submit = document.getElementById('submit')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let number = document.getElementById('number')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')
let radSex = document.getElementsByName('gender')

submit.addEventListener('click', function(){
    setErroFor()
})

function setErroFor(){
    if(firstname.value.length === 0){
        firstname.classList.add('erro')
        alert('Preencha os Campos')
    }else{
        firstname.classList.add('success')
    } 
    
    if(lastname.value.length === 0){
        lastname.classList.add('erro')  
    }else{
        lastname.classList.add('success')
    }

    if(email.value.length === 0){
        email.classList.add('erro')
    }else if(!validateEmail (email.value)){
        alert('Insira um Email Validor')
    }else{
        email.classList.add('success')
    }

    if(number.value.length === 0){
        number.classList.add('erro')
    }else if(!validPhone (number.value)){
        number.classList.add('erro')
        alert('Numero de teleforne Invalido!')
    }else{
        number.classList.add('success')
    }

    if(password.value.length === 0){
        password.classList.add('erro') 
    }else if(password.value.length < 4){
        alert('Sua senha não pode ter menos que 4 caracteres')
        password.classList.add('erro') 
    }else{
        password.classList.add('success') 
    }

    if(passwordConfirmation.value.length === 0){
        passwordConfirmation.classList.add('erro') 
    }else if(passwordConfirmation !== password){
        passwordConfirmation.classList.add('erro') 
        alert('ERRO DE COMFIRMAÇÃO') 
    }else{
        passwordConfirmation.classList.add('success') 
    }
    
}

function validPhone (phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }