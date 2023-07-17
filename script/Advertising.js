const imageGallery = document.getElementById("image-gallery-Advertising-show");
let galleryItem = document.querySelectorAll(".image-gallery-Advertising-item-box-img");

function galleryItemRemove() {
    for (let i = 0; i < galleryItem.length; i++) {
        galleryItem[i].classList.remove("gallery-Advertising-active")
    }
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", (e) => {
        galleryItemRemove()
        e.target.classList.toggle("gallery-Advertising-active")
        imageGallery.src = e.target.src
    })
}