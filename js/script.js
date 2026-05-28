// Typing Effect
const text =
    [
        "Frontend Developer",
        "Full Stack Developer",
        "MERN Stack Developer"
    ];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
function typeEffect() {
    current = text[i];
    if (!isDeleting) {
        document.getElementById("typing")
            .innerHTML =
            current.substring(0, j++);

        if (j > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    }
    else {
        document.getElementById("typing")
            .innerHTML =
            current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(typeEffect, 100);
}
typeEffect();

// Form Validation

document.getElementById("contactForm").addEventListener("submit", (e) => {

        let email =
            document.querySelector(
                'input[name="email"]'
            ).value;

        let pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {
            alert("Invalid Email");
            e.preventDefault();
        }

    });


// Project Filter
function filterProjects(type) {
    const projects =
        document.querySelectorAll(".project-card");

    projects.forEach(card => {

        if (type === "all") {
            card.style.display = "block";
        }
        else {
            card.style.display =
                card.classList.contains(type)
                    ?
                    "block"
                    :
                    "none";
        }

    });

}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}