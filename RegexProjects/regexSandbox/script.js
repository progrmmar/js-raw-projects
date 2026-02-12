const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

const getFlags = () => {
    const iFlag = caseInsensitiveFlag.checked;
    const gFlag = globalFlag.checked;

    if (iFlag && globalFlag) {
        return "gi";
    } else if (iFlag) {
        return "i";
    } else if (gFlag) {
        return "g";
    } else {
        return "";
    }
};

const checkPattern = () => {
    const flag = getFlags();
    const regex = new RegExp(regexPattern.value, flag);

    const matched = stringToTest.innerText.match(regex);
    testResult.value = matched;
    stringToTest.innerHTML = stringToTest.innerText.replace(
        regex,
        content => `<span class="highlight">${content}</span>`
    );
};

testButton.addEventListener("click", () => {
    checkPattern();
});
