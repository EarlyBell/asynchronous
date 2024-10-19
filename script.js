// This file demonstrates synchronous and asynchronous JavaScript execution.

// Synchronous Execution
// Code executes line by line, one after the other.
console.log("run");
console.log(" then run");
console.log(" then run");

// Asynchronous Execution
// setTimeout schedules the callback function to run after 3 seconds (3000 milliseconds).
// The code continues executing without waiting for the setTimeout to complete.
setTimeout(() => console.log("time up"), 3000);

// This line executes immediately after the setTimeout, demonstrating asynchronous behavior.
console.log("hey");

// Example: Updating the DOM Asynchronously
// This section is commented out but shows how to manipulate the DOM asynchronously.

// let data = ['a','b','c','d']

// function call(){
//     setTimeout(()=>{
//         const body = document.querySelector('body')
//         body.innerHTML = ''
//         data.forEach((item)=>{
//             const arrItem = document.createElement('p')
//             arrItem.textContent = item
//         body.append(arrItem)
//         })
//     },1000)
// }

// function newItem(item,callback ){
//     setTimeout(()=>{
//         data.push(item)
//         callback()
//     },5000)
// }

// newItem('slate',call)

// DOM Manipulation and Event Handling
// Select various HTML elements and store them in variables.
const input = document.getElementById('name');
const button = document.querySelector("button");
const form = document.querySelector("form");
const greet = document.querySelector("h1");
const color = document.getElementById('color');
const span = document.querySelector("span");

// Log the initial value of the color input.
console.log(color.value);

// Add a 'submit' event listener to the form.
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior (page reload).
  e.preventDefault();
});

// Define a function 'func' to update the content and color of the span element.
function func() {
  span.textContent = input.value;
  span.style.color = color.value;
}

// Add an 'input' event listener to the input element, calling 'func' whenever the input value changes.
input.addEventListener("input", func);
