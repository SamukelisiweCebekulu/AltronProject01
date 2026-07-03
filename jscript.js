let shape = document.getElementById("shape");

let colors = ["lime", "pink", "maroon", "black", "purple"];
let colorIndex = 0;

let isCircle = false;
let size = 150;

// Button 1
function changeColor() {
    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    shape.style.backgroundColor = colors[colorIndex];
}

// Button 2
function changeShape() {

    if (isCircle) {
        shape.style.borderRadius = "0%";
        isCircle = false;
    } else {
        shape.style.borderRadius = "50%";
        isCircle = true;
    }

}

// Button 3
function increaseSize() {
    size += 20;

    shape.style.width = size + "px";
    shape.style.height = size + "px";
}

// Button 4
function resetShape() {

    size = 150;
    colorIndex = 0;
    isCircle = false;

    shape.style.width = "150px";
    shape.style.height = "150px";
    shape.style.backgroundColor = "red";
    shape.style.borderRadius = "0%";

}