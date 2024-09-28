// 4 Pillars of DOM

// 1. Selection of an element in HTML
var a = document.querySelector("h1");
// document.getElementById("idname");
// document.getElementsByClassName("classname");
console.log(a);


// 2. Changing HTML
a.innerHTML = "Hello World";
a.innerText = "New Text";
a.textContent = "New Text";


// 3. Changing CSS
a.style.color = "red";
a.style.backgroundColor = "black";
a.style.fontSize = "12px";


// 4. Event Listener
a.addEventListener("click", (event) => {
    a.innerHTML = "Changed"
    a.style.color = "yellow";
    console.log("Event Type: ", event.type);
});

a.onclick = (event) => {
    console.log("Clicked");
    console.log("Event Type: ", event.type);
}


// Attributes
let id = a.getAttribute("id");
let cls = a.getAttribute("class");

a.setAttribute("class", "newClass");
a.setAttribute("id", "newId");


// Create New Element
let button = document.createElement("button");
let div = document.createElement("div");


// Delete Existing Element
a.remove();


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