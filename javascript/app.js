let submit = document.getElementById('submit')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let number = document.getElementById('number')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')

submit.addEventListener('click', function(){
    checkInputs()
})


function checkInputs(){
    if (firstname.value.length == 0){
        setErroFor(firstname, 'Preencha o campo Obrigatorio')  
    } 
}

function setErroFor(input, message){
    let small = document.querySelector('small')

    input.classList.add('erro')  
    small.innerText = message

}

/*function setSuccessFor(){
    let inputs = document.querySelector('showErro')
    let small = document.querySelector('small')
}


else if(!validateEmail (email.value)){
        input3.lastElementChild.innerText = 'Email Invalido'

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  */