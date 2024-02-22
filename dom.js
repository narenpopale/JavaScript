// 4 Pillars of DOM

// 1. Selection of an element in HTML
var a = document.querySelector("h1");
// document.getElementById("idname");
// document.getElementsByClassName("classname");
console.log(a);


// 2. Changing HTML
a.innerHTML = "Hello World";


// 3. Changing CSS
a.style.color = "red";
a.style.backgroundColor = "black";


// 4. Event Listener
a.addEventListener("click", function(){
    a.innerHTML = "Changed"
    a.style.color = "yellow";
});



// Bulb example of DOM
var bulb = document.querySelector(".bulb");
var btn = document.querySelector("button");
var isOn = false;

btn.addEventListener('click', function(){
    if(isOn == false) {
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
        isOn = true;
    }
    else {
        bulb.style.backgroundColor = "white";
        btn.innerHTML = "ON";
        isOn = false;
    }
});



// Selection of multiple elements
var arr = document.querySelectorAll("h1");
