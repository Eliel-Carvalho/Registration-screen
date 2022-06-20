let submit = document.getElementById('submit')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let number = document.getElementById('number')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')

let radSex = document.getElementsByName('gender')

submit.addEventListener('click', function(){
    eventIput()
})

function eventIput(){
    
    if(firstname.value.length == 0 || lastname.value.length == 0 || email.value.length == 0 || number.value.length == 0 || password.value.length == 0){

        firstname.classList.add('show')
        lastname.classList.add('show')
        email.classList.add('show')
        number.classList.add('show')
        password.classList.add('show')
        passwordConfirmation.classList.add('show')
    }
}


