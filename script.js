let imgSlider = document.querySelector('.history img')
let indicator = document.querySelectorAll('.footer .slideIndicator span')
let imgs = ['./peak_2.jpg', './rectangle_23.jpg', './rectangle_23_copy.jpg', './peak_2.jpg'];
let time = 3000
let i = 0;


function slideImages() {
    indicator.forEach((el) => {
        el.classList.remove("active");
    })
    imgSlider.src = imgs[i]
    indicator[i].classList.add("active");
    
    
    if(i < imgs.length-1) {
        i++
    } else {
        i = 0
    }

    setTimeout(() => {
        slideImages()
    }, time);
}

window.onload = slideImages;