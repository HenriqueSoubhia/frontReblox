const imgs = document.querySelectorAll("#imgs img");
const imgSlideshowEl = document.querySelector("#slideshow img");
const slideshowEl = document.querySelector("#slideshow");

const btnNext = document.querySelector("#btn-next");
const btnBack = document.querySelector("#btn-back");

let currentIndex = 0;
const totalImages = imgs.length;

imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        slideshowEl.classList.add("show");
        currentIndex = index;
        imgSlideshowEl.src = img.src;
    });
});

btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    imgSlideshowEl.src = imgs[currentIndex].src;
});

btnBack.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    imgSlideshowEl.src = imgs[currentIndex].src;
});

slideshowEl.addEventListener("click", (e) => {
    if (e.target.classList[0] === "slideshow") {
        slideshowEl.classList.remove("show");
    }
});