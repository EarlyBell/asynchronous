// Synchronous JavaScript refers to code that executes line by line,
//  where each line must finish executing before the next line starts.
//   This is the default way JavaScript works

console.log("run");
console.log(" then run");
console.log(" then run");

// Asynchronous JavaScript allows your code to continue running even if
// certain tasks  haven't finished yet. This is crucial for creating responsive and
//  efficient web applications.

setTimeout(() => console.log("time up"), 3000);

console.log("hey");

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

// Select the input element from the HTML and store it in the input variable.
const input = document.getElementById('name');
// Select the button element from the HTML and store it in the button variable.
const button = document.querySelector("button");
// Select the form element from the HTML and store it in the form variable.
const form = document.querySelector("form");
// Select the h1 element from the HTML and store it in the greet variable.
const greet = document.querySelector("h1");

const color = document.getElementById('color')
const span = document.querySelector("span")

console.log(color.value)
// Add an event listener to the form element that listens for the 'submit' event.
form.addEventListener("submit", (e) => {
  // e is targeting the form element
  // Prevent the default form submission behavior, which would typically refresh the page.
  e.preventDefault(); // preventdefault is prevent the page from reload
});

// Define a function named 'func'.
function func() {
    span.textContent = input.value
    span.style.color = color.value;
}

// Add an event listener to the input element that listens for the 'input' event (which fires whenever the input value changes). When the event occurs, the 'func' function is executed.
input.addEventListener("input", func);
