const storyContainer = document.querySelector("#story-container");

// getting access of the button elements
const scaryStoryButton = storyContainer.querySelector("#scary-btn");
const funnyStoryButton = storyContainer.querySelector("#funny-btn");
const adventureStoryButton = storyContainer.querySelector("#adventure-btn");

// getting access of the paragraph element for showing the story
const resultParagraph = storyContainer.querySelector("#result");

// story database
const storyDB = {
    funny: {
        story: "It's a funny story.",
        borderColor: "red"
    },
    scary: {
        story: "It was a scary story",
        borderColor: "green"
    },
    adventure: {
        story: "The adventure story was nice",
        borderColor: "blue"
    }
};
// displaying story function
const displayStory = genre => {
    if (storyDB.hasOwnProperty(genre)) {
        resultParagraph.textContent = storyDB[genre].story;
        storyContainer.style.borderColor = storyDB[genre].borderColor;
    } else {
        console.log("There is no story like this");
    }
};
// adding event handlers for each element
scaryStoryButton.addEventListener("click", () => {
  displayStory("scary")
});
funnyStoryButton.addEventListener("click", () => {
  displayStory("funny")
});
adventureStoryButton.addEventListener("click", () => {
  displayStory("adventure")
});