const favoriteIcon = document.querySelectorAll(".favorite-icon");

favoriteIcon.forEach(element => {
    element.addEventListener("click", () => {
        const toggle = element.classList.toggle("filled");

        if (toggle) {
            element.innerHTML = "&#10084;";
        } else {
          element.innerHTML = "&#9825";
        }
        // console.log(element.);
        // console.log(a);
    });
});
