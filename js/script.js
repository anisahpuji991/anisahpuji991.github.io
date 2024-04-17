const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const btn = document.querySelector('#contact_btn');
const inputs = document.querySelector('form');
btn.addEventListener('click',()=>{
    Email.send({
        Host:"sandbox.smtp.mailtrap.io",
        Username:'704d949b130fb0',
        Password:'2c31fa2b5afe75',
        To:'frameconsultant@gm.com',
        From:inputs.elements["contact_email"].value,
        Subject:inputs.elements["contact_subject"].value,
        Body:inputs.elements["contact_msg"].value
    }).then(msg=>alert("The email successfully sent"))
})