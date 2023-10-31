const elemItems = document.querySelectorAll(".left .inner ul li");

elemItems.forEach(function (element) {
    element.addEventListener("click", function () {
        this.classList.add("active");
        document.getElementById("changeTopic").innerText = this.dataset.topic;

        elemItems.forEach(function (el) {
            if (el !== this) {
                el.classList.remove("active");
            }
        }, this);
    });
});


document.getElementById("hamburger-1").addEventListener("click", function () {
    this.classList.toggle("is-active");
    document.getElementById("sideBar").classList.toggle("show")
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
