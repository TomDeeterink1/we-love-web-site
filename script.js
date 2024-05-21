gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const buttons = document.querySelectorAll(".intro-button");

buttons.forEach(button => {
    button.addEventListener("click", clicker);
});

function clicker() {
    gsap.to(window, { duration: 0.8, scrollTo: "#s2home" });
    gsap.from('.intro-text-2', { duration: 1, y: '8vh', ease: 'power1.out'})
    gsap.from('.grid2', { duration: 1.1, y: '8vh', ease: 'power1.out'});
}

const goupper = document.querySelector(".go-up");

goupper.addEventListener("click" , letsgoup)

function letsgoup() {
    gsap.to(window, { duration: 1.1, scrollTo: 0, delay: 0, ease: "power1.out" });
    
}


const button = document.querySelectorAll(".next-button");

button.forEach(button => {
    button.addEventListener("click", clickers);
});

function clickers() {
    gsap.to(window, { duration: 0.8, scrollTo: "#s3home" });
    gsap.from('.grid', { duration: 1.1, y: '8vh', ease: 'power1.out'});
}

