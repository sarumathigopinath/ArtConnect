// ABOUT PAGE SCROLL ANIMATION

const aboutSections = document.querySelectorAll(
    ".about-hero, .about-content, .about-features, .about-message"
);

aboutSections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 1s ease";
});

window.addEventListener("scroll", function () {

    aboutSections.forEach(section => {

        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (sectionPosition < screenPosition) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});


// BACK TO TOP BUTTON

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "12px 18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.backgroundColor = "#ffb6c1";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

document.body.appendChild(topButton);


// Show button when scrolling

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// Scroll to top when button is clicked

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});