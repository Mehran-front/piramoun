// ====================header
// ====================header-btn
const headerBtn = document.getElementById("header-btn");
const headerList = document.getElementById("header-list");
const heidNheaderList = document.querySelector(".back-header-list");

    headerBtn.addEventListener("click", () => {
        headerBtn.classList.toggle("hedaer-btn-line-change")
        headerList.style.right = "0"
        document.querySelector("body").style.overflow="hidden"
    })

    heidNheaderList.addEventListener("click", () => {
        headerList.style.right = "-100%"
        headerBtn.classList.remove("hedaer-btn-line-change")
        document.querySelector("body").style.overflow="unset"
    })
// =====================Grouping-kala

const btnGroupingkala = document.getElementById("Grouping-kala");
const listGroupingkala = document.getElementById("contact-Grouping-kala");

btnGroupingkala.addEventListener("click", () => {
    if (listGroupingkala.style.height === "630px") {
        listGroupingkala.style.height = "0"
    } else {
        listGroupingkala.style.height = "630px"
    }
})
// ===================== End Grouping-kala
// ==================== Endheader

//===================== swiper-piramoun 
if (window.innerWidth < 576) {
    var swiper = new Swiper(".swiper-piramoun", {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}

if (window.innerWidth > 576) {
    var swiper = new Swiper(".swiper-piramoun", {
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}
if (window.innerWidth > 724) {
    var swiper = new Swiper(".swiper-piramoun", {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}
if (window.innerWidth > 992) {
    var swiper = new Swiper(".swiper-piramoun", {
        slidesPerView: 7,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}

//===================== End swiper-piramoun
// ==================== swiper-slider-kala
if (window.innerWidth < 576) {
    var swiper = new Swiper(".swiper-slider-kala", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}

if (window.innerWidth > 576) {
    var swiper = new Swiper(".swiper-slider-kala", {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}
if (window.innerWidth > 992) {
    var swiper = new Swiper(".swiper-slider-kala", {
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}
if (window.innerWidth > 1200) {
    var swiper = new Swiper(".swiper-slider-kala", {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}
// ======================== Endswiper-slider-kala
// ========================company-caredit
if (window.innerWidth < 576) {
    var swiper = new Swiper(".swiper-company-caredit", {
        slidesPerView: 1,
    });
}

if (window.innerWidth > 576) {
    var swiper = new Swiper(".swiper-company-caredit", {
        slidesPerView: 3,
    });
}
if (window.innerWidth > 724) {
    var swiper = new Swiper(".swiper-company-caredit", {
        slidesPerView: 4,
    });
}
if (window.innerWidth > 992) {
    var swiper = new Swiper(".swiper-company-caredit", {
        slidesPerView: 5,
    });
}
if (window.innerWidth > 1200) {
    var swiper = new Swiper(".swiper-company-caredit", {
        slidesPerView: 6,
    });
}
// ========================Endcompany-caredit
