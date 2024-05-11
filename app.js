document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const deleteButton = document.querySelector(".delete-svg-div");
  const addButton = document.querySelector(".add-div");
  const sortButton = document.querySelector(".sort-svg-div");
  const listDiv = document.querySelector(".list-div");
  const deleteSvg = document.querySelector(".delete-svg");
  const sortReverseSvg = document.querySelector(".sort-reverse-svg");
  const sortSvg = document.querySelector(".sort-svg");
  const plusDiv = document.querySelector(".plus-div");
  let arrayForInputs = [];

  input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      if (input.value.length === 0) {
        alert("You didnt add something :(");
        return;
      } else if (isInArray(arrayForInputs, input.value) == true) {
        return;
      } else if (!input.value.trim()) {
        alert("You didnt add something :(");
        return;
      }
      event.preventDefault();
      addingElements();
    }
  });

  deleteButton.addEventListener("click", () => {
    input.value = "";
  });

  addButton.addEventListener("click", () => {
    if (input.value.length === 0) {
      alert("You didnt add something :(");
      return;
    } else if (isInArray(arrayForInputs, input.value) == true) {
      return;
    } else if (!input.value.trim()) {
      alert("You didnt add something :(");
      return;
    }
    addingElements();
  });
  plusDiv.addEventListener("click", () => {
    if (input.value.length === 0) {
      alert("You didnt add something :(");
      return;
    } else if (isInArray(arrayForInputs, input.value) == true) {
      return;
    } else if (!input.value.trim()) {
      alert("You didnt add something :(");
      return;
    }
    addingElements();
  });

  let i = 0;

  sortButton.addEventListener("click", () => {
    if (arrayForInputs.length === 0) {
      alert("Please add something to the list ...");
      return;
    }
    i++;
    let sortedArray;
    sortReverseSvg.style.top = "0.1px";
    if (i % 2 === 0) {
      sortedArray = arrayForInputs.slice().sort();
      sortReverseSvg.style.display = "block";
      sortSvg.style.display = "none";
    } else {
      sortedArray = arrayForInputs.slice().sort().reverse();
      sortReverseSvg.style.display = "none";
      sortSvg.style.display = "block";
    }
    displaySortedArray(sortedArray);
  });

  function addingElements() {
    let createdDiv = document.createElement("div");
    let createdParagraphDiv = document.createElement("div");
    let createdParagraph = document.createElement("p");
    let deleteButtonDiv = document.createElement("div");
    // main div
    listDiv.style.display = "block";
    createdDiv.style.display = "flex";
    createdDiv.style.justifyContent = "space-between";

    createdDiv.style.height = "0";
    // efekt
    createdDiv.style.overflow = "hidden";
    createdDiv.style.padding = "5px";

    createdDiv.style.overflowX = "auto";
    createdDiv.style.whiteSpace = "nowrap";
    createdDiv.style.borderRadius = "15";
    createdDiv.style.transition = "shadow";
    createdDiv.style.transition = "height 0.6s ease";
    createdDiv.appendChild(createdParagraphDiv);
    createdDiv.appendChild(deleteButtonDiv);
    // hover for shadow
    createdDiv.addEventListener("mouseover", () => {
      createdDiv.style.backgroundColor = "#EFEFEF";
      createdDiv.style.transition = "background-color 0.4s ease";
    });
    createdDiv.addEventListener("mouseleave", () => {
      createdDiv.style.backgroundColor = "white";
    });
    // paragraph div

    createdParagraphDiv.appendChild(createdParagraph);
    createdParagraph.innerText = input.value;
    createdParagraph.style.marginTop = "0";
    createdParagraph.style.marginBottom = "0";
    createdParagraph.style.paddingLeft = "10px";
    createdParagraphDiv.style.display = "flex";
    createdParagraphDiv.style.alignItems = "center";
    createdParagraphDiv.style.justifyContent = "center";

    // Adding to array
    arrayForInputs.push(input.value);

    // delete button for divs
    let clone = deleteSvg.cloneNode(true);
    deleteButtonDiv.appendChild(clone);

    deleteButtonDiv.style.display = "flex";
    deleteButtonDiv.style.alignItems = "center";
    deleteButtonDiv.style.justifyContent = "center";
    clone.addEventListener("mouseenter", () => {
      clone.style.fill = "blueviolet";
    });
    clone.addEventListener("mouseleave", () => {
      clone.style.transition = "fill 0.5s";
      clone.style.fill = "transparent";
    });
    // click to clone
    clone.addEventListener("click", () => {
      createdDiv.style.transition = "height 0.6s ease";
      void createdDiv.offsetHeight;
      createdDiv.style.height = "0";
      setTimeout(() => {
        createdDiv.remove();
        let indexToRemove = arrayForInputs.indexOf(createdParagraph.innerText);
        if (indexToRemove != -1) {
          arrayForInputs.splice(indexToRemove, 1);
        }
        if (arrayForInputs.length === 0) {
          listDiv.style.display = "none";
        }
      }, 0);
    });

    deleteButtonDiv.style.width = "20%";
    listDiv.appendChild(createdDiv);
    listDiv.scrollTop = listDiv.scrollHeight;
    input.value = "";
    void createdDiv.offsetHeight;

    createdDiv.style.height = "30px";
  }

  function displaySortedArray(sortedArray) {
    while (listDiv.firstChild) {
      listDiv.removeChild(listDiv.firstChild);
    }

    sortedArray.forEach((arrayElement) => {
      let createdDiv = document.createElement("div");
      let createdParagraphDiv = document.createElement("div");
      let createdParagraph = document.createElement("p");
      let deleteButtonDiv = document.createElement("div");

      createdDiv.style.display = "flex";
      createdDiv.style.justifyContent = "space-between";

      createdDiv.style.height = "30px";
      createdDiv.style.padding = "5px";
      createdDiv.appendChild(createdParagraphDiv);
      createdDiv.appendChild(deleteButtonDiv);
      createdDiv.addEventListener("mouseover", () => {
        createdDiv.style.backgroundColor = "#EFEFEF";
        createdDiv.style.transition = "background-color 0.4s ease";
      });
      createdDiv.addEventListener("mouseleave", () => {
        createdDiv.style.backgroundColor = "white";
      });
      createdParagraphDiv.appendChild(createdParagraph);
      createdParagraph.innerText = arrayElement;
      createdParagraph.style.marginTop = "0";
      createdParagraph.style.marginBottom = "0";
      createdParagraph.style.paddingLeft = "10px";
      createdParagraphDiv.style.display = "flex";
      createdParagraphDiv.style.alignItems = "center";
      createdParagraphDiv.style.justifyContent = "center";

      let clone = deleteSvg.cloneNode(true);
      deleteButtonDiv.appendChild(clone);

      deleteButtonDiv.style.display = "flex";
      deleteButtonDiv.style.alignItems = "center";
      deleteButtonDiv.style.justifyContent = "center";
      clone.addEventListener("mouseenter", () => {
        clone.style.fill = "blueviolet";
      });
      clone.addEventListener("mouseleave", () => {
        clone.style.transition = "fill 0.5s";
        clone.style.fill = "transparent";
      });
      clone.addEventListener("click", () => {
        createdDiv.remove();
        let indexToRemove = arrayForInputs.indexOf(arrayElement);
        if (indexToRemove != -1) {
          arrayForInputs.splice(indexToRemove, 1);
        }
        if (arrayForInputs.length === 0) {
          listDiv.style.display = "none";
        }
      });

      deleteButtonDiv.style.width = "20%";
      listDiv.appendChild(createdDiv);
    });
  }
});

function isInArray(array, inputText) {
  let result = false;
  array.forEach((item) => {
    if (item === inputText) {
      result = window.alert("There is already the same item in the list.");
      return true;
    }
  });
}
