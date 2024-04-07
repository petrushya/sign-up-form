const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const missmatch = document.querySelector('.missmatch');
const form = document.querySelector('form');

confirmPass.addEventListener('keyup', () => {
  if(password.value && confirmPass.value && password.value === confirmPass.value){
    missmatch.textContent = '';
    confirmPass.removeAttribute('style');
  }else{
    missmatch.textContent = '* Passwords do not match';
    confirmPass.style.borderColor = '#f00';
  };
});
form.onsubmit = (e) => {
  if(password.value && confirmPass.value && password.value !== confirmPass.value){
    e.preventDefault();
    confirmPass.focus();
    confirmPass.setAttribute('style','background-color:#ffa07a50;border-color:#f00;box-shadow:0 0 7px #f00;');
  };
};
