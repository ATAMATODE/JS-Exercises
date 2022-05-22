const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// target the button
const btn = document.getElementById("btn");
// target the color text element
const color = document.querySelector(".color");

// Callback Function
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

// create and event listener for the button
btn.addEventListener("click", function () { // Higher order function
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        // console.log(hexColor)
        // change the body backgroundColor 
        document.body.style.backgroundColor = hexColor;
        // change the text of the color value to the color name
        color.textContent = hexColor;

    }
})





