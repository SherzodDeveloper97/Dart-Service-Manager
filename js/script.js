// var continue = document.querySelector('.continue');

// function toggleClass() {
//     continue.classList.toggle('hidden');
//     continue.classList.toggle('active');
// }

// var inbox_item = document.querySelector('.inbox_item');

// function toggleClass1() {
//     inbox_item.classList.toggle('hidden');
//     inbox_item.classList.toggle('active');
// }

let offset = 0;
const sliderLine = document.querySelector(".slaider_content");

document.querySelector('.slider_next').addEventListener('click', function () {
    offset = offset + 790;
    if (offset > 1580) {
        offset = 0;
    }
    sliderLine.style.transform = `translateX(-${offset}px)`;
});

document.querySelector(".slider_prev").addEventListener('click', function () {
    offset = offset - 790;
    if(offset < 0 ){
        offset = 1580;
    }
    sliderLine.style.transform = `translateX(-${offset}px)`;
});