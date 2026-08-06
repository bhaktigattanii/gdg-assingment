gsap.registerPlugin(ScrollTrigger);
gsap.from(".variant", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});