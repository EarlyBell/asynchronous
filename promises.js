// promises.js
// This file demonstrates various ways to work with promises in JavaScript.

// Example 1: Basic Promise with setTimeout
// Create a promise that resolves if 'number' is greater than 50 after 2 seconds.
// let number = 100

// const myPromise = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         if(number > 50){
//             resolve('success')
//         }else{
//             reject('fail')
//         }
//     },2000)
// })
// myPromise
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))

// Example 2: Async/Await with Promise
// Define a variable 'number' and create a promise that resolves or rejects based on its value.
// let number = 100;
// const myPromise = new Promise(
//   (resolve, reject) => {
//     setTimeout(() => {
//       const response = "success";
//       const error = "fail";
//       if (number > 50) {
//         resolve(response);
//       } else {
//         reject(error);
//       }
//     }, 1000);
//   }
// );

// Define an async function 'func' that awaits the promise resolution and logs the result.
// const func = async () => {
//   let result;
//   const res = await myPromise
//     .then((res) => (result = res))
//     .catch((err) => (result = err));
// console.log(`${result} because number is ${number}`)
// };
// func();

// Example 3: Error Handling with try...catch
// Demonstrate basic error handling using try...catch blocks.
// let number = 25
//  let age = 38
// try {
//     if(age > number){
//         throw Error("age is to high")
//     }
//     else{
//         console.log("age is good")
//     }
// } catch (err) {
//     console.log(err)
// }

// Example 4: Fetching data from Chuck Norris API
// Define an array of categories for Chuck Norris jokes.
//  https://github.com/public-apis/public-apis?tab=readme-ov-file#books
 

let categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

// Set the URL for fetching a random Chuck Norris joke.
const url =
  "https://api.chucknorris.io/jokes/random";

// Select the HTML element with the ID 'joke'.
const joke = document.querySelector("#joke");

// Define a function 'fetchJoke' to fetch and display a random joke.
function fetchJoke() {
  // Fetch data from the API URL.
  fetch(url)
    // Parse the response as JSON.
    .then((res) => res.json())
    // Update the 'joke' element's content with the joke value from the API response.
    .then((data) => (joke.innerHTML = data.value))
    // Handle any errors during the fetch process by displaying a message.
    .catch(
      () =>
        (joke.innerHTML =
          "chuck norris website does not fail!!!, you are simply too little to see it")
    );
}

// Call the 'fetchJoke' function to initially display a joke.
fetchJoke();
