const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image")
const closeBtn = document.querySelector("#close-btn");

galleryItems.forEach(item => {
    item.addEventListener("click", event => {
        // showing the popup
        lightbox.style.display = "flex";

        // image link of the -thumbnail excepting the "-thumbnail" word
        const imageLink = event.target.src.replace("-thumbnail", "");

        // adding imageLink to lightbox image
        lightboxImage.src = imageLink;

        event.stopPropagation();
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});
