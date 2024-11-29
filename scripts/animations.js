import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
    // Initialize parallax effects
    initParallax();
    
    // Initialize floating shapes
    initFloatingShapes();
    
    // Hero animations
    gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out'
    });

    // Parallax scroll for hero section
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 200,
        ease: 'none'
    });

    // Service cards parallax effect
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            opacity: 0.5,
            scale: 0.95,
            duration: 1
        });
    });

    // Blog cards stagger animation with parallax
    gsap.from('.blog-card', {
        scrollTrigger: {
            trigger: '.blog',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Section titles parallax
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: 50,
            opacity: 0,
            duration: 1
        });
    });
}

function initParallax() {
    // Parallax effect for floating shapes
    gsap.utils.toArray('.floating-shape').forEach(shape => {
        gsap.to(shape, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: gsap.utils.random(100, 200),
            x: gsap.utils.random(-50, 50),
            rotation: gsap.utils.random(-180, 180),
            ease: 'none'
        });
    });
}

function initFloatingShapes() {
    // Continuous floating animation for shapes
    gsap.utils.toArray('.floating-shape').forEach(shape => {
        gsap.to(shape, {
            duration: gsap.utils.random(10, 20),
            rotation: 360,
            repeat: -1,
            ease: 'none'
        });
        
        gsap.to(shape, {
            duration: gsap.utils.random(3, 6),
            y: '+=30',
            x: '+=20',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });
}