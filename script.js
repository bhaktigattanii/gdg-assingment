gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from(".hero .tag", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
})

.from(".hero .heading", {
    opacity: 0,
    y: 25,
    duration: 0.7,
    ease: "power2.out"
}, "-=0.3")

.from(".hero .text", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
}, "-=0.3")

.from(".hero .hero_buttons", {
    opacity: 0,
    y: 15,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.2")

.from(".hero_img", {
    opacity: 0,
    y: 35,
    scale: 1.04,
    duration: 1,
    ease: "power3.out"
}, "-=0.1")

// rectangle ki horizontal line draw hogi
.to(".selection_box", {
    width: "20%",
    duration: 0.4,
    ease: "none"
})

// ab uski vertical sides grow hongi
.to(".selection_box", {
    height: "15%",
    duration: 0.3,
    ease: "none"
})

// ab poora rectangle stretch hoga
.to(".selection_box", {
    width: "84%",
    height: "76%",
    duration: 1,
    ease: "power2.inOut"
})

// size label
.to(".selection_size", {
    opacity: 1,
    duration: 0.3
})

// lighting / dark overlay
.to(".overlay_top, .overlay_bottom, .overlay_left, .overlay_right", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
})

.to(".capture_popup", {
    opacity: 1,
    y: -5,
    duration: 0.4,
    ease: "power2.out"
})
// 5️⃣ Popup thodi der dikhega
.to(".capture_popup", {
    opacity: 0,
    y: 5,
    duration: 0.3,
    delay: 1,
    ease: "power2.in"
})

// 6️⃣ Selection box shrink hokar disappear
.to(".selection_box", {
    width: 0,
    height: 0,
    duration: 0.6,
    ease: "power2.inOut"
})

// 7️⃣ Size label disappear
.to(".selection_size", {
    opacity: 0,
    duration: 0.2
}, "<")

// 8️⃣ Dark overlay remove
.to(".overlay_top, .overlay_bottom, .overlay_left, .overlay_right", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
});

gsap.to(".hero_img", {
    scale: 1.08,
    y: -60,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

const heroImg = document.querySelector(".hero_img");

const image = heroImg.querySelector("img");

heroImg.addEventListener("mousemove", (e) => {

    const rect = heroImg.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 35;
const moveY = (y / rect.height - 0.5) * 22;

    gsap.to(image, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
    });

});

heroImg.addEventListener("mouseleave", () => {

    gsap.to(image, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
    });

});


