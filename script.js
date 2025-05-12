const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPopup = document.querySelector('.loginbutton');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    console.log("Register-Link wurde geklickt"); //LogNachricht hinzugefügt
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

buttonPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});