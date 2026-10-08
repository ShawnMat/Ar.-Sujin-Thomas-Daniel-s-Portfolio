const menuButton = document.querySelector("#menuBtn");
const navScreen = document.querySelector(".navScreen");
const closeButton = document.querySelector(".closeBtn");

gsap.registerPlugin(ScrollTrigger);

const title = new SplitType(".listItems", {
    types: "chars"
});

const load = gsap.timeline();

load
.fromTo(".name",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        duration:1.3,
        ease: "power4.inOut"
    }
)

.fromTo(".portfolioWebsite",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        duration:1,
        ease: "power4.inOut"
    }
)
.fromTo(".line",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        duration:1,
        stagger:0.1,
        ease: "power4.inOut"
    }
)

.fromTo(title.chars,
    {
        x: 100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger:0.1,
        ease: "power3.out"
    }
)
.fromTo("#menuBtn",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        duration:1,
        ease: "power4.inOut"
    }
);
// .to(".name",{
//     x:"10%",
//     duration:1,
//     ease: "power4.inOut"
// })





function openMenu() {
    console.log("Menu Clicked");
    gsap.to(navScreen,{
        y:"0%",
        duration:1,
        ease: "power4.inOut"
    });
}

function closeMenu() {
    console.log("Menu Closed");
    gsap.to(navScreen, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut"
    });
}


closeButton.addEventListener("click", closeMenu);
menuButton.addEventListener("click", openMenu);