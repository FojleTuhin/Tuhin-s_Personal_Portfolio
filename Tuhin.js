// typing animation

var typed = new Typed(".typing", {
    strings: [ "Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})


const goTopBtn = document.querySelector('.up');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY < 250)
    {
        goTopBtn.style.display ="none"
    }
    else{
        goTopBtn.style.display="flex"
    }
}


