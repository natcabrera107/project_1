const title = document.querySelector(".page-title");
const fullText = "Nat Cabrera's Portfolio";
if (title) {
    title.innerText = "";
    let index = 0;
    const titleTimer = setInterval(() => {
        title.innerText = fullText.slice(0, index + 1);
        index++;
        if (index == fullText.length) {
            clearInterval(titleTimer);
        }
    }, 100);
}

const about_title = document.querySelector(".about-title");
const about_full_text = "About";
if (about_title) {
    about_title.innerText = "";
    let aboutIndex = 0;
    const aboutTimer = setInterval(() => {
        about_title.innerText = about_full_text.slice(0, aboutIndex + 1);
        aboutIndex++;
        if (aboutIndex == about_full_text.length) {
            clearInterval(aboutTimer);
        }
    }, 200);
}

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
fadeElements.forEach((el) => observer.observe(el));
