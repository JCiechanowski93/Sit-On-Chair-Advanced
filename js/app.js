document.addEventListener('DOMContentLoaded', function () {


    const leftArrow = document.querySelector('.arrow--left');
    const rightArrow = document.querySelector('.arrow--right');
    const sliderPictures = document.querySelectorAll('.slider > li');
    let imgIndex = 0;

    sliderPictures[imgIndex].classList.add('visible');
    const visible = document.querySelector('li.visible');
    visible.style.opacity = "1";


    rightArrow.addEventListener('click', function () {
        sliderPictures[imgIndex].classList.remove('visible');

        if (imgIndex == 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
        sliderPictures[imgIndex].classList.add('visible');
    });

    leftArrow.addEventListener('click', function () {
        sliderPictures[imgIndex].classList.remove('visible');
        if (imgIndex == 0) {
            imgIndex = 1;
        } else {
            imgIndex--;
        }
        sliderPictures[imgIndex].classList.add('visible');
    });

    const hiddenDescription = document.querySelector(".hide_one");
    const hiddenDescription2 = document.querySelector(".hide_two");
    const photoOne = document.querySelector(".photo_cointainer_1");
    const photoTwo = document.querySelector(".photo_container_2");

    hiddenDescription.style.display = "none";
    hiddenDescription2.style.display = "none";

    photoOne.addEventListener("mouseover", function () {
        hiddenDescription.style.display = "block";
    });
    photoTwo.addEventListener("mouseover", function () {
        hiddenDescription2.style.display = "block";
    });
    photoOne.addEventListener("mouseout", function () {
        hiddenDescription.style.display = "none";
    });
    photoTwo.addEventListener("mouseout", function () {
        hiddenDescription2.style.display = "none";
    });

    const toggle = document.querySelector(".page-nav-toggle");
    const nav = document.querySelector(".nav-list");
    const mobileNav = nav.cloneNode(true);
    mobileNav.classList.remove("nav-list");
    mobileNav.classList.add("mobile-page-nav-list");
    document.body.appendChild(mobileNav);


    toggle.addEventListener("click", function () {
        document.body.classList.toggle("nav-show");

    })





});