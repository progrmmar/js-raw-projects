const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

// adding change event on textInput area
textInput.addEventListener("input", () => {
    let count = textInput.value.trim().length;

    if (count >= 50) {
        const slicedPart = textInput.value.slice(0, 50);
        textInput.value = slicedPart;
        count = slicedPart.length;
    }

    count === 50
        ? charCount.classList.add("red")
        : charCount.classList.remove("red");

    charCount.innerText = `Character count: ${count}/50`;
});
