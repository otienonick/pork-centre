const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password2');
const passwordTwo = document.getElementById('password two');
form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();
}

if(usernameValue === '') {

    setErrorFor(username, 'Username cannot be blank');

}else{
     setSuccesFor(username);
}

function setErrorFor(input, message){
    const Conrol = input.parentElement;
    const small = control.querySelector('small');
    small.innerText = message;
    conrol.className='control error';
}
function setSuccessFor(input){
    const Conrol=input;
    conrol.className='control success';

}