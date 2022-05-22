
// create and event listener for the button and the background.
/*btn.addEventListener("click", function () { // Higher order function
    let rgbaColor = `rgba(${randomNumber},${randomNumber},${randomNumber},${randomOpc})`;
    for (let i = 0; i <= 4; i++) {
        rgbaColor += getRandomNumber();
        // console.log(rgbaColor)
        // change the body backgroundColor 
        document.body.style.backgroundColor = rgbaColor;
        // change the text of the color value to the color name
        color.textContent = rgbaColor;
    }})*/
    
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

//create an event listener for the botton and the backgroundColor
 btn.addEventListener("click",function(){
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const a = Math.random().toFixed(1);
    const rgba = `rgb(${r},${g},${b},${a})`;
    document.body.style.backgroundColor = rgba;
    
    color.textContent = rgba;
      
 })
