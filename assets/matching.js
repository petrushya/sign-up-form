const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const missmatch = document.querySelector('.missmatch');
const form = document.querySelector('form');

confirmPass.addEventListener('keyup', () => {
  if(password.value && confirmPass.value && password.value === confirmPass.value){
    missmatch.textContent = '';
    confirmPass.style.backgroundColor = '#fff';
  }else{
    missmatch.textContent = '* Passwords do not match';
  };
});
form.onsubmit = (e) => {
  if(password.value && confirmPass.value && password.value !== confirmPass.value){
    e.preventDefault();
    confirmPass.focus();
    confirmPass.style.backgroundColor = '#ffa07a';
  };
};
