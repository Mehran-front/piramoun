
const product_btn_plus = document.getElementById("product-number-plus")
const product_btn_minus = document.getElementById("product-number-minus")
const product_input = document.getElementById("product-number-input")
const product_add_buy = document.getElementById("product-number-add-buy")
let productNumber = 0;

product_btn_plus.addEventListener("click", () => {
    productNumber++
    product_input.value = productNumber
})
product_btn_minus.addEventListener("click", () => {
    productNumber--
    if (productNumber < 0) {
        productNumber = 0
    }
    product_input.value = productNumber
})

product_add_buy.addEventListener("click", (e) => {
    if (product_input.value == "0") {
        e.preventDefault()
    }
})
const product_gallery_picture = document.getElementById("product-gallery-picture")
const product_gallery_video = document.getElementById("product-gallery-video")
const product_gallery_item = document.querySelectorAll(".product-gallery-box-picture")
const product_gallery_item_video = document.querySelector(".product-video")
const product_icon_video = document.querySelector(".product-icon-video")

function product_gallery_item_remove() {
    for (let i = 0; i < product_gallery_item.length; i++) {
        product_gallery_item[i].classList.remove("active-product-gallery")
    }
}

for (let i = 0; i < product_gallery_item.length; i++) {
    product_gallery_item[i].addEventListener("click", (activeProduct) => {
        product_gallery_item_remove()
        activeProduct.target.classList.toggle("active-product-gallery")
        product_gallery_picture.src = activeProduct.target.src
        product_icon_video.classList.remove("active-product-gallery")
        product_gallery_picture.style.display = "block"
        product_gallery_video.style.display = "none"
    })
}
product_gallery_item_video.addEventListener("click", () => {
    product_gallery_item_remove()
    product_icon_video.classList.add("active-product-gallery")
    product_gallery_picture.style.display = "none"
    product_gallery_video.style.display = "block"
})

const tabs_product_btn = document.querySelectorAll(".tabs-product-btn");
const tabs_product_text = document.querySelectorAll(".tabs-product-text")
function tabs_product_btn_remove() {
    for (let i = 0; i < tabs_product_btn.length; i++) {
        tabs_product_btn[i].classList.remove("active-tabs-product-btn")
    }
}

for (let i = 0; i < tabs_product_btn.length; i++) {
    tabs_product_btn[i].addEventListener("click", (e) => {
        tabs_product_btn_remove()
        e.target.classList.toggle("active-tabs-product-btn")
    })
}

function tabs_product_text_remove() {
    for (let i = 0; i < tabs_product_text.length; i++) {
        tabs_product_text[i].classList.remove("active-tabs-product-text")
    }
};
let product_btn_Description = document.querySelector(".tabs-product-btn-Description");
let product_btn_Dedicated_parameters = document.querySelector(".tabs-product-btn-Dedicated-parameters");
let product_btn_General_features = document.querySelector(".tabs-product-btn-General-features");
let product_btn_Contact = document.querySelector(".tabs-product-btn-Contact");

let product_Description = document.querySelector(".tabs-product-Description")
let product_Dedicated_parameters = document.querySelector(".tabs-product-Dedicated-parameters")
let product_General_features = document.querySelector(".tabs-product-General-features")
let product_Contact = document.querySelector(".tabs-product-Contact")
product_btn_Description.addEventListener("click", () => {
    tabs_product_text_remove()
    product_Description.classList.toggle("active-tabs-product-text")
});

product_btn_Dedicated_parameters.addEventListener("click", () => {
    tabs_product_text_remove()
    product_Dedicated_parameters.classList.toggle("active-tabs-product-text")
});

product_btn_General_features.addEventListener("click", () => {
    tabs_product_text_remove()
    product_General_features.classList.toggle("active-tabs-product-text")
});

product_btn_Contact.addEventListener("click", () => {
    tabs_product_text_remove()
    product_Contact.classList.toggle("active-tabs-product-text")
});
