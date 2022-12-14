const animItems = document.querySelectorAll("._anim-items"),
    realisation = document.querySelector(".realisation"),
    add = document.querySelector(".add"),
    addText = document.querySelector(".add__text"),
    term = document.querySelectorAll(".term"),
    termBtn = document.querySelectorAll(".terms__btn"),
    turn = document.querySelectorAll(".term__turn"),
    termClose = document.querySelectorAll(".term__close"),
    menu = document.querySelectorAll(".menu__li"),
    sectons = document.querySelectorAll("._main"),
    left = document.querySelectorAll(".term_left"),
    right = document.querySelectorAll(".term_right"),
    arrows = document.querySelectorAll(".term__arrows"),
    navbarBtn = document.querySelector(".navbar__btn"),
    navbarContent = document.querySelector(".navbar__menu"),
    termInfo = document.querySelector(".terms__info"),
    termInfoContent = document.querySelectorAll(".terms__info__content"),
    nav = document.querySelector(".main__navbar");

window.addEventListener("scroll", function () {
    const offset = window.pageYOffset;

    if (offset > 20) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
    
    
});
setTimeout(() => {
    document.querySelector('.header__box_path').style.backdropFilter = 'blur(10px) opacity(1)';        
}, 1800);

if (offset > 20) nav.classList.add("sticky");
else nav.classList.remove("sticky");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

add.addEventListener("click", function () {
    if (realisation.classList.contains("_opened")) {
        realisation.classList.remove("_opened");
        add.classList.remove("_opened");
        addText.innerHTML = "rozwi??";
    } else {
        realisation.classList.add("_opened");
        add.classList.add("_opened");
        addText.innerHTML = "zwi??";
    }
});

// for (let i = 0; i < termBtn.length; i++) {
//   termBtn[i].addEventListener("click", function () {
//     termInfo.style.display = "flex";
//     setTimeout(function () {
//       termInfo.style.opacity = "1";
//     }, 200);
//     setTimeout(function () {
//       termInfoContent[i].style.display = "flex";
//       turn[i].innerHTML = `<p>${i + 1}</p>/4`;
//     }, 400);
//   });
// }

for (let i = 0; i < termBtn.length; i++) {
    termBtn[i].addEventListener("click", function () {
        termInfo.style.display = "flex";
        location.href = "#terms";
        setTimeout(function () {
            termInfo.style.opacity = "1";
        }, 200);
        for (let ii = 0; ii < termBtn.length; ii++) {
            setTimeout(function () {
                termInfoContent[ii].style.display = "none";
            }, 400);
        }
        setTimeout(function () {
            termInfoContent[i].style.display = "flex";
            turn[i].innerHTML = `<p>${i + 1}</p>/4`;
        }, 400);
    });
}

for (let i = 0; i < arrows.length; i++) {
    termBtn[i].addEventListener("click", function () {
        if ((i = 0)) {
            for (let ii = 0; ii < termBtn.length; ii++) {
                setTimeout(function () {
                    termInfoContent[ii].style.display = "none";
                }, 400);
            }
            setTimeout(function () {
                termInfoContent[i].style.display = "flex";
                turn[i].innerHTML = `<p>${i + 1}</p>/4`;
            }, 400);
        }
    });
}
for (let i = 0; i < termBtn.length; i++) {
    termBtn[i].addEventListener("click", function () {
        termInfo.style.display = "flex";
        setTimeout(function () {
            termInfo.style.opacity = "1";
        }, 200);
        for (let ii = 0; ii < termBtn.length; ii++) {
            setTimeout(function () {
                termInfoContent[ii].style.display = "none";
            }, 400);
        }
        setTimeout(function () {
            termInfoContent[i].style.display = "flex";
            termInfoContent[i].style.opacity = "1";
            turn[i].innerHTML = `<p>${i + 1}</p>/4`;
        }, 400);
    });
}

for (let i = 0; i < left.length; i++) {
    left[i].addEventListener("click", function Left() {
        if (i > 0) {
            for (let ii = 0; ii < left.length; ii++) {
                termInfoContent[ii].style.opacity = "0";
                setTimeout(function () {
                    termInfoContent[ii].style.display = "none";
                }, 400);
            }
            setTimeout(function () {
                termInfoContent[i - 1].style.display = "flex";
            }, 400);
            setTimeout(function () {
                termInfoContent[i - 1].style.opacity = "1";
                turn[i - 1].innerHTML = `<p>${i}</p>/4`;
            }, 600);
        } else {
            i = 4;
            Left();
        }
    });
}
for (let i = 0; i < right.length; i++) {
    right[i].addEventListener("click", function Right() {
        if (i < 3) {
            for (let ii = 0; ii < right.length; ii++) {
                termInfoContent[ii].style.opacity = "0";
                setTimeout(function () {
                    termInfoContent[ii].style.display = "none";
                }, 400);
            }
            setTimeout(function () {
                termInfoContent[i + 1].style.display = "flex";
            }, 400);
            setTimeout(function () {
                termInfoContent[i + 1].style.opacity = "1";
                turn[i + 1].innerHTML = `<p>${i + 2}</p>/4`;
            }, 600);
        } else {
            i = -1;
            Right();
        }
    });
}
for (let i = 0; i < termClose.length; i++) {
    termClose[i].addEventListener("click", function () {
        termInfo.style.opacity = "0";
        setTimeout(function () {
            termInfo.style.display = "none";
        }, 1000);
    });
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function (e) {
        e.preventDefault();
    });
    let sectionTop = sectons[i].getBoundingClientRect().top;
    // console.log(i);
    // window.scrollTo(0, sectionTop);
}

navbarBtn.addEventListener("click", menuOpen);

function menuOpen() {
    if (navbarBtn.classList.contains("active") === true) {
        navbarBtn.classList.remove("active");
        navbarContent.style = `left: -102%; transition: left 0.5s`;
    } else {
        navbarBtn.classList.add("active");
        navbarContent.style = `left: 0; transition: left 0.5s`;
    }
}
function menuClose(event) {
    if (event.target.classList.contains("navbar__content")) {
        navbarContent.style = `left: -102%; transition: left 0.5s`;
        navbarBtn.classList.remove("active");
    }
}

function SliderS(sliderClass) {
    this.sliderImages = document.querySelectorAll(sliderClass + " img");
    this.sliderBtnLeft = document.querySelector(sliderClass + " .slick-button-prev");
    this.sliderBtnRight = document.querySelector(sliderClass + " .slick-button-next");
    this.sliderCounter = 0;
    var sliderContext = this;
    this.sliderBtnLeft.addEventListener("click", left);
    this.sliderBtnRight.addEventListener("click", right);
    function right() {
        sliderContext.sliderImages[sliderContext.sliderCounter].classList.remove("slider-active");
        sliderContext.sliderCounter++;
        if (sliderContext.sliderCounter == sliderContext.sliderImages.length) {
            sliderContext.sliderCounter = 0;
        }
        sliderContext.sliderImages[sliderContext.sliderCounter].classList.add("slider-active");
    }
    function left() {
        sliderContext.sliderImages[sliderContext.sliderCounter].classList.remove("slider-active");
        sliderContext.sliderCounter--;
        if (sliderContext.sliderCounter < 0) {
            sliderContext.sliderCounter = --sliderContext.sliderImages.length;
        }
        sliderContext.sliderImages[sliderContext.sliderCounter].classList.add("slider-active");
    }
}

var slick = new SliderS(".mySlider");

// ??????????????

(() => {
    "use strict";
    var slide1 = document.querySelector(".slide_1");
    var more1 = document.querySelector(".realisation__more_1");
    var more2 = document.querySelector(".realisation__more_2");
    var sliderBtns = document.querySelectorAll(".arrows");
    var number = document.querySelector(".circle__mini");
    var circleContent1 = document.querySelector(".big__circle__content_1");
    var circleContent2 = document.querySelector(".big__circle__content_2");
    if (sliderBtns) sliderBtns.forEach((function(sliderBtn) {
        sliderBtn.addEventListener("click", (function() {
            if (slide1.classList.contains("slider-active")) {
                number.innerHTML = "1";
                circleContent1.style.display = "block";
                circleContent2.style.display = "none";
                more1.style.display = "flex";
                more2.style.display = "none";
            } else {
                number.innerHTML = "2";
                circleContent2.style.display = "block";
                circleContent1.style.display = "none";
                more2.style.display = "flex";
                more1.style.display = "none";
            }
        }));
    }));
})();

//

// ScrollReveal

ScrollReveal({
    reset: false,
    // distance: '100px',
    duration: 700,
    delay: 200,
    easing: 'ease-out'
});

ScrollReveal().reveal('.header__title, .header__info, .header__box-pics, .about__content__img, .team__img, .team__info, .circle', {
    delay: 500,
    distance: '0px',
    interval: 100,
    opacity: 0
});



ScrollReveal().reveal('.navbar__menu-item', {
    reset: false,
    delay: 1000,
    opacity: 0,
});

ScrollReveal().reveal('.header__p, .footer', {
    delay: 700,
    distance: '40px',
    opacity: 0,
    origin: 'bottom'
});

ScrollReveal().reveal('.header__pics, .header__box, .term, .contact__bg', {
    delay: 700,
    distance: '60px',
    interval: 200,
    opacity: 0,
    origin: 'bottom'
});

ScrollReveal().reveal('.about__title, .team__title, .realisation__title, .cards__images, .oferta__text, .contact__form, .contacts__type', {
    delay: 500,
    duration: 300,
    distance: '30px',
    interval: 200,
    opacity: 0,
    origin: 'bottom'
});

ScrollReveal().reveal('.hexagon-anim', {
    delay: 700,
    distance: '60px',
    opacity: 0,
    origin: 'bottom'
});


ScrollReveal().reveal('.about__text-box', {
    delay: 700,
    distance: '30px',
    interval: 200,
    opacity: 0,
    origin: 'bottom'
});

ScrollReveal().reveal('.person', {
    delay: 700,
    duration: 500,
    interval: 200,
    distance: '100px',
    opacity: 0,
    origin: 'bottom'
});


ScrollReveal().reveal('.big__circle__content', {
    delay: 700,
    distance: '60px',
    opacity: 0,
    origin: 'right'
});