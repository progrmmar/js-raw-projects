const buttons = document.querySelectorAll("#emoji-reactor-container button");

// updating content
const updateCount = button => {
    const countSpan = button.querySelector(".emoji-count");
    const count = Number(countSpan.textContent);
    if (count < 10) { countSpan.textContent = count + 1; }
};
// adding event listener on each element
buttons.forEach(button => {
    button.addEventListener("click", () => updateCount(button));
});
