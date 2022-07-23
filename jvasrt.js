var typed = new Typed(".typing", {
    strings: [" ", "Web developer", "youtuber", "Coder C++",],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
const nav = document.querySelector(".navbar");
const navlist = nav.querySelectorAll("li");
const totalNavlist = navlist.length;

const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavlist; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}




