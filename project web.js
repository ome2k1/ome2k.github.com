const SWIRL_OPTS = {
    left: 0,
    top: 0,
    fill: '#F93E39',
    duration: 'rand(600, 1000)',
    radius: 'rand(10, 20)',
    pathScale: 'rand(.5, 1)',
    swirlFrequency: 'rand(2,4)',
    swirlSize: 'rand(6,14)',
};
window.onscroll = function () {
    var header = document.querySelector('header');
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    // Code to toggle menu visibility
});
const text = "OMAR SALMAN";
const speed = 150; // Speed in milliseconds
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        this.classList.toggle('is-active');
    });
});

// Add active class to the currently selected link
const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Consolidated click event listener
document.addEventListener('click', function (e) {
    const x = e.pageX;
    const y = e.pageY - 150;

    [swirl1, swirl2, swirl3, swirl4].forEach(swirl => {
        swirl.tune({ x, y }).generate().replay();
    });

    // Assuming circle1 and circle2 are declared elsewhere
    circle1.tune({ x: e.pageX, y: e.pageY }).replay();
    circle2.tune({ x: e.pageX, y: e.pageY }).replay();
});

// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Center text hover effects
const centerTexts = document.querySelectorAll('.center-text');

centerTexts.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.classList.add('hovered');
    });

    text.addEventListener('mouseout', () => {
        text.classList.remove('hovered');
    });
});

// Custom Heart shape (assuming you've implemented the getShape() method)
class Heart extends mojs.CustomShape {
    getShape() {
        // Replace with the actual SVG path for the heart shape
        return 'M95.7,9.5c-1.7-1.7-4.4-1.7-6,0l-51,51.1c-1.7,1.7-1.7,4.4,0,6l51.1,51c1.7,1.7,4.4,1.7,6,0l51-51.1c1.7-1.7,1.7-4.4,0-6L101.7,9.5C99.4,6.8,97.1,4.5,95.7,9.5z';
    }

    getLength() {
        return 292.110107421875; // Optional
    }
}

mojs.addShape('heart', Heart);

const heart = new mojs.Shape({
    shape: 'heart',
    fill: 'none',
    stroke: 'white',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    y: -20,
    duration: 1000,
});