const topo = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 500) {
        topo.classList.add("active");
    } else {
        topo.classList.remove("active");
    }
});