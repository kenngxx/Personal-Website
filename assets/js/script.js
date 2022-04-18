// ------------------- ABOUT ME SECTION -----------------------

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('about__active')
        })
        target.classList.add('about__active')

        tabs.forEach(tab => {
            tab.classList.remove('about__active')
        })
        tab.classList.add('about__active')
    })

})


// -------------------- SKILLS SECTION -------------------------------------

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// -------------------------ACTIVE LINK SCROLL -------------------------------

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ----------------- SCROLL REVEAL -------------------------


const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', { delay: 700 })
sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' })


// ------ TYPING ANIMATION -----------
var typed = new Typed(".typing-anim", {
    strings: ["Computer Engineering Student", "Freelance Technical Writer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
})

// ------------- MAILTO (AVOID MIXED CONTENT (HTTPS)) ----------------------


function sendMail() {
    var body = document.getElementById("Message").value;
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;

    window.location.replace(`mailto:contact-me@kenn-gutierrez.com?body=${body + '%0D%0A %0D%0A %0D%0A' + name + '%0D%0A' + email}`);
}