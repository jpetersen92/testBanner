gsap.from('.logo', {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: 'back',
});

gsap.to('.logo', {
    duration: 0.5,
    delay: 1.2,
    top: 0,
})

gsap.from('#kylo', {
    duration: 1.8,
    left: -200,
    bottom: -100,
    delay: 1
})

gsap.from('#rae', {
    duration: 1.8,
    left: 350,
    bottom: -200,
    delay: 1
})

gsap.from('button', {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 2
})