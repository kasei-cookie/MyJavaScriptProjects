`use strict`;

const colorsArray = [{}, {}, {}, {}, {}, {}];
let hasEventListeners;
let rgbNumber;

function handleClick(i, colorBlocks) {
    if (i === rgbNumber) {
        colorBlocks[i].textContent = `Correct!`;
    } else {
        colorBlocks[i].textContent = `Try again!`;
    }
}

function theMain() {
    document.querySelector(".new-color").textContent = `New colors!`;

    // Choosing random rgb for
    function color() {
        return Math.trunc(Math.random() * 256);
    }

    // Assigning r g b to every object in an array + Setting background color to each block
    const colorBlocks = document.querySelectorAll(".color-block");

    for (let i = 0; i < colorsArray.length; i++) {
        colorsArray[i].r = color();
        colorsArray[i].g = color();
        colorsArray[i].b = color();
        colorBlocks[i].style.backgroundColor = `rgb(${colorsArray[i].r}, ${colorsArray[i].g}, ${colorsArray[i].b})`;
        colorBlocks[i].textContent = `?`;

        const sum = colorsArray[i].r + colorsArray[i].g + colorsArray[i].b;
        if (sum < 382) {
            colorBlocks[i].style.color = "lightgrey";
        } else {
            colorBlocks[i].style.color = "black";
        }
    }

    // Showing rgb in title
    rgbNumber = Math.trunc(Math.random() * 6);
    document.querySelector(".rgb-title").textContent = `RGB (${colorsArray[rgbNumber].r}, ${colorsArray[rgbNumber].g}, ${colorsArray[rgbNumber].b})`


    // Checking which color block was clicked
    if (!hasEventListeners) {
        for (let i = 0; i < colorsArray.length; i++) {
            colorBlocks[i].addEventListener("click", function () {
                handleClick(i, colorBlocks);
            })
        }
        hasEventListeners = true;
    }

}

document.querySelector(".new-color").addEventListener("click", theMain);