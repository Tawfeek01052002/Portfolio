var myNav = document.getElementById('nav');
var mylogo=document.querySelector('.logo_1');
window.onscroll = function () { 
    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ){
        myNav.classList.add("nav-colored");
        mylogo.classList.add("logo_1_color");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        mylogo.classList.remove("logo_1_color");
    }
};