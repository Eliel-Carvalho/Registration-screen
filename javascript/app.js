let submit = document.getElementById('submit')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let number = document.getElementById('number')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')
let small = document.querySelector('small')

submit.addEventListener('click', function(){
    setErroFor()
})

function setErroFor(){

    if(firstname.value.length === 0){
        let input1 = document.getElementById('input1')
        firstname.classList.add('erro')
        input1.lastElementChild.classList.add('appear')

    }else{
        firstname.classList.add('success')
    } 
    
    if(lastname.value.length === 0){

        let input2 = document.getElementById('input2')
        lastname.classList.add('erro') 
        input2.lastElementChild.classList.add('appear') 

    }else{
        lastname.classList.add('success')
    }

    if(email.value.length === 0){

        let input3 = document.getElementById('input3')
        email.classList.add('erro')
        input3.lastElementChild.classList.add('appear')

    }else if(!validateEmail (email.value)){

        email.classList.add('erro')
        
        input3.lastElementChild.innerText = 'Email Invalido'  

    }else{
        email.classList.add('success')
    }

    if(number.value.length === 0){

        let input4 = document.getElementById('input4')
        number.classList.add('erro')
        input4.lastElementChild.classList.add('appear')

    }else{
        number.classList.add('success')
    }

    if(password.value.length === 0){

        let input5 = document.getElementById('input5')
        password.classList.add('erro') 
        input5.lastElementChild.classList.add('appear')

    }else if(password.value.length < 4){

        password.classList.add('erro') 
        input5.lastElementChild.innerText = 'numero de caracteres insuficiente' 
    }else{
        password.classList.add('success') 
    }

    if(passwordConfirmation.value.length === 0){

        let input6 = document.getElementById('input6')
        passwordConfirmation.classList.add('erro') 
        input6.lastElementChild.classList.add('appear')

    }else if(passwordConfirmation !== password){

        passwordConfirmation.classList.add('erro')
        input6.lastElementChild.innerText = 'Confirmação incorreta'  

    }else{
        passwordConfirmation.classList.add('success') 
    }
    
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }