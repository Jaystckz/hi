"use strict"

const imgs = document.querySelectorAll(".header ul img");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeSlide();

previousBtn.addEventListener("click", () => {
    if(n > 0){
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

nextBtn.addEventListener("click", (e) => {
    if(n < imgs.length - 1){
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
    item.addEventListener("wheel", (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}