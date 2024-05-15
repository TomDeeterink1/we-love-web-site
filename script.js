gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const buttons = document.querySelectorAll(".intro-button");

buttons.forEach(button => {
    button.addEventListener("click", clicker);
});

function clicker() {
    gsap.to(window, { duration: 0.8, scrollTo: "#s2home" });
    gsap.from('.intro-text-2', { duration: 1.1, x: '-50vw', ease: 'power1.out'})
}

const goupper = document.querySelector(".go-up");

goupper.addEventListener("click" , letsgoup)

function letsgoup() {
    gsap.to(window, { duration: 1.2, scrollTo: 0, delay: 0.2, ease: "back.out(1.7)" });
    
}




