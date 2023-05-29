document.addEventListener("click", e => {
    if (e.target.classList.contains("dropdown-title")) {
        e.target.nextElementSibling.classList.toggle("open");
    } else if (e.target.dataset.src) {
        let videoEl = document.querySelector(".overlay video");
        videoEl.src = e.target.dataset.src;
        videoEl.play();
        document.querySelector(".overlay").classList.add("show");
    } else if (e.target.classList.contains("overlay")) {
        let videoEl = document.querySelector("video");
        setTimeout(() => videoEl.src = "", 200);
        videoEl.pause();
        e.target.classList.remove("show");
    }
});