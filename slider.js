const slideImage = document.getElementById('slider-image');
const images = [
    './images/bg-1.jpg',
    './images/bg-2.jpg',
    './images/bg-3.jpg',
    './images/bg-4.jpg',
    './images/bg-5.jpg',
    './images/bg-6.jpg',
];
let imageIndex = 0;
setInterval(() => {
    slideImage.style.opacity = 0;
    setTimeout(() => {
        if(imageIndex === images.length){
            imageIndex = 0;
        }
        slideImage.src = images[imageIndex];
        slideImage.style.opacity = 1;
    }, 500);
    console.log(imageIndex);
    imageIndex++;
}, 1500);