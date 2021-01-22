var login=document.querySelector('#login');
var signup=document.querySelector('#signup');

login.addEventListener('click', function(){
   login.style.transform='translateX(-100%)';
   signup.style.transform='translateX(-100%)';

});
signup.addEventListener('click', function(){
    login.style.transform='translateX(0%)';
    signup.style.transform='translateX(0%)';
 
 });