window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('navbar-logo');
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
        logo.src = './assets/img/nav/logo-dark.png';
        logo.classList.add()
    } else {
        navbar.classList.remove('scrolled');
        logo.src = './assets/img/nav/logo-light.png';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".navbar-nav .nav-link");
    let currentPath = window.location.pathname.split("/").pop();

    if (currentPath === "" || currentPath === "index.html") {

        links.forEach(link => {
            if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "/") {
                link.classList.add("active");
            }
        });
    } else {

        links.forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            }
        });
    }
});



var swiper = new Swiper(".header .mySwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const dynamicText = document.querySelector('.dynamic-text');
            const texts = ["Unique Design", "Urban Design", "Decor Plan"];
            dynamicText.textContent = texts[this.realIndex];

            const animateElements = document.querySelectorAll('.animate-element');

            animateElements.forEach((element) => {
                element.classList.remove('animate__animated', 'animate__fadeInUp');
                void element.offsetWidth;
                element.classList.add('animate__animated', 'animate__fadeInUp');
            });
        },
    },
});


document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.animate-element');

    animateElements.forEach((element) => {

        element.classList.add('animate__animated', 'animate__fadeInUp');


        element.addEventListener('animationend', () => {
            element.classList.remove('animate__fadeInUp');
        });
    });
});


document.querySelector('.about-us .about-us-text .exploreBtn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.about-us .container .row .popup-img').style.display = 'block';
    document.querySelector('.navbar').style.display = 'none';
});


document.querySelector('.about-us .popup-img').addEventListener('click', function () {
    document.querySelector('.about-us .container .row .popup-img').style.display = 'none';
    document.querySelector('.navbar').style.display = 'flex';
});


window.addEventListener('click', function (e) {
    if (e.target === document.querySelector('.about-us .container .row .popup-img')) {
        document.querySelector('.about-us .container .row .popup-img').style.display = 'none';
        document.querySelector('.navbar').style.display = 'flex';
    }
});


var swiper = new Swiper(".works .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
    },
});

var swiper = new Swiper(".Services .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
        1160: {
            slidesPerView: 3, // 3 شرائح للشاشات الكبيرة
            spaceBetween: 3,
        },
    },
});


var swiper = new Swiper(".team .mySwiper", {
    slidesPerView: 3, // يعرض 3 كروت في كل شريحة
    spaceBetween: 5, // لا توجد مسافة بين الكروت
    loop: true, // تفعيل التكرار
    speed: 600, // سرعة الانتقال بين الشرائح
    autoplay: {
        delay: 2000, // الوقت بين كل حركة تلقائية (3 ثواني)
        disableOnInteraction: false, // الاستمرار في الحركة التلقائية حتى عند التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1, // شريحة واحدة للشاشات الصغيرة
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // شريحتين للشاشات المتوسطة
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3, // 3 شرائح للشاشات الكبيرة
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".Clients .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 3,
        },
        1160: {
            slidesPerView: 2,
            spaceBetween: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 3,
        }
    },
});


var swiper = new Swiper(".Latest-Articles .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
    },
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const arrowContainer = document.getElementById('arrow-container');

    if (window.scrollY > 50) {

        arrowContainer.style.opacity = '1';
    } else {
        navbar.style.opacity = '1';
        arrowContainer.style.opacity = '0';
    }
});

document.getElementById('arrow').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let loader = document.querySelector(".loader-container");
    let pageContent = document.querySelectorAll("nav, header, section , footer"); // كل محتوى الصفحة

    if (loader) {

        pageContent.forEach(el => el.style.display = "none");

        window.addEventListener("load", function () {

            loader.classList.add("hidden");
            pageContent.forEach(el => el.style.display = "block");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });
});
document.addEventListener('mousedown', function (e) {
    e.preventDefault();
});
