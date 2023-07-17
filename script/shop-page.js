
const btns_dropdown = document.querySelectorAll(".lsit-item-side-page-shop");

for (let i = 0; i < btns_dropdown.length; i++) {

    btns_dropdown[i].addEventListener("click", (e) => {
        let dropdown_lsit = e.target.querySelector(".dropdown-lsit-side-page-shop")
        let lsit_icon = e.target.querySelector("i")
        dropdown_lsit.classList.toggle("dropdown-lsit-side-page-shop-active")
        lsit_icon.classList.toggle("title-side-page-shop-active")

    })
}

const show_fliter_page_shop_ordering = document.querySelector(".show-fliter-page-shop-ordering");
let fliter_page_shop_ordering = document.querySelector(".contact-fliter-page-shop-ordering")
show_fliter_page_shop_ordering.addEventListener("click", () => {
    if (fliter_page_shop_ordering.style.display === "block") {
        fliter_page_shop_ordering.style.display = "none"
    } else {
        fliter_page_shop_ordering.style.display = "block"
    }
})

const show_side = document.querySelector(".show-side")
const side_page_shop = document.querySelector(".side-page-shop")
const side_page_shop_before = document.querySelector(".side-page-shop-before")
show_side.addEventListener("click", () => {
    if (side_page_shop.style.display === "block") {
        side_page_shop.style.display = "none"
    } else {
        side_page_shop.style.display = "block"
    }
})

side_page_shop_before.addEventListener("click", () => {
    if (side_page_shop.style.display === "block") {
        side_page_shop.style.display = "none"
    } else {
        side_page_shop.style.display = "block"
    }
})



