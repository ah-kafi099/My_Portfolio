const typingText = new Typed("#text", {
    strings : ["AH","Kafi","Web Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
})



const banner = document.querySelector(".banner")
const dayNight = document.querySelector(".daynight")
dayNight.addEventListener("click", () => {
    banner.classList.toggle("night")
})