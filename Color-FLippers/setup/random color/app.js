const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// target the button
const btn = document.getElementById("btn");
// target the color text element
const color = document.querySelector(".color");


// create random number generator between 0 - 3
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}

// create and event listener for the button
btn.addEventListener("click", function () {
    // generate a random number between 0 and 4
    let randomNumber = getRandomNumber() // generates numbers between 0 and 1(0.1 - 0.9)


    //Math.floor(Math.random() * colors.length);
    // console.log(randomNumber);
    // target the body and change the background color
    document.body.style.backgroundColor = colors[randomNumber];
    // change the text of the color value to the color name
    color.textContent = colors[randomNumber];
})










































