// main section elements
const mainSection = document.querySelector("#main-section");
const categoryDropdown = document.querySelector("#category-dropdown");
const viewCategoryBtn = document.querySelector("#view-category-button");
const addBookmarkBtn = document.querySelector("#add-bookmark-button");

// form section elements
const formSection = document.querySelector("#form-section");
const categoryName = document.querySelectorAll(".category-name");
const bookmarkNameInput = document.querySelector("#name");
const bookmarkUrlInput = document.querySelector("#url");
const addBookmarkFormBtn = document.querySelector("#add-bookmark-button-form");
const closeFormBtn = document.querySelector("#close-form-button");

// bookmarks list section elements
const bookmarkListSection = document.querySelector("#bookmark-list-section");
const categoryList = document.querySelector("#category-list");
const closeListBtn = document.querySelector("#close-list-button");
const deleteBookmarkBtn = document.querySelector("#delete-bookmark-button");
const allBookmarkInputsElm = document.getElementsByName("bookmark");

const getBookmarks = () => {
    return JSON.parse(localStorage.getItem("bookmarks")) || [];
};

const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
};

const displayBookmarks = () => {
    const categoryBookmark = getBookmarks().filter(item => {
        return categoryDropdown.value === item.category;
    });

    if (!categoryBookmark.length) {
        categoryList.innerHTML = "<p>No Bookmarks Found</p>";
        return;
    }
    // console.log(bookmarkData);
    categoryList.innerHTML = "";

    categoryBookmark.forEach(bookmark => {
        categoryList.innerHTML += `
          <div>
              <input type="radio" name="bookmark" id="${bookmark.name}" value="${bookmark.name}">
              <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>
          </div>
      `;
    });
};

const getCheckedBookmarkElm = () => {
    let checkedElm;
    allBookmarkInputsElm.forEach(elm => {
        if (elm.checked) {
            checkedElm = elm;
        }
    });
    return checkedElm;
};

const deleteBookmark = () => {
    const checkedElm = getCheckedBookmarkElm();

    if (!checkedElm) {
        return;
    }

    checkedElm.parentElement.remove();

    const bookmarkData = getBookmarks().filter(item => {
        return !(
            categoryDropdown.value === item.category &&
            checkedElm.id === item.name
        );
    });

    localStorage.setItem("bookmarks", JSON.stringify(bookmarkData));
    displayBookmarks();
};

// home -> addBookmark
addBookmarkBtn.addEventListener("click", () => {
    displayOrCloseForm();
    categoryName[0].innerText = categoryDropdown.value;
});

// home -> addBookmark -> addBookmark
addBookmarkFormBtn.addEventListener("click", () => {
    const bookmarkData = getBookmarks();

    if (!(bookmarkNameInput.value || bookmarkUrlInput.value)) {
        alert("Please! Place the name and url.");
        return;
    }

    const bookmarkObj = {
        id: `${bookmarkNameInput.value.trim().split(" ").join("-")}-${Date.now()}`,
        category: categoryDropdown.value,
        name: bookmarkNameInput.value,
        url: bookmarkUrlInput.value
    };

    bookmarkData.push(bookmarkObj);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkData));

    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
    
    displayOrCloseForm();
});

// home -> addBookmark -> back
closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
});

// home -> viewCategoryBtn
viewCategoryBtn.addEventListener("click", () => {
    displayOrHideCategory();
    categoryName[1].innerText = categoryDropdown.value;
    displayBookmarks();
});

// home -> viewCategoryBtn -> back
closeListBtn.addEventListener("click", () => {
    displayOrHideCategory();
});

// home -> viewCategoryBtn -> deleteBookmark
deleteBookmarkBtn.addEventListener("click", () => {
    deleteBookmark();
});
