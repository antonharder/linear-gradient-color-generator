var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var theCssProp = window.getComputedStyle(body).getPropertyValue("background").substr(17, 59)+";";
var random = document.getElementById("random");

function changeBackgroundColor() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

// random color generator function
function randomRgbGenerator() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// random gradient generator function
function randomColorChange() {
    body.style.background = 
    "linear-gradient(to right, " 
    + randomRgbGenerator()
    + ", "
    + randomRgbGenerator()
    + ")";
    css.textContent = body.style.background + ";";
}

color1.setAttribute("value", "#FF0000");
color2.setAttribute("value", "#FFFF00");
color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);

random.addEventListener("click", randomColorChange);

// displays the initial background value
css.textContent = theCssProp;