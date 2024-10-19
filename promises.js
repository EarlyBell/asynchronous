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

// async function name(params) {

// }

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

// const func = async () => {
//   let result;
//   const res = await myPromise
//     .then((res) => (result = res))
//     .catch((err) => (result = err));
// console.log(`${result} because number is ${number}`)
// };
// func();

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



// https://github.com/public-apis/public-apis?tab=readme-ov-file#books
 

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

const url =
  "https://api.chucknorris.io/jokes/random";

const joke = document.querySelector("#joke");
function fetchJoke() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => (joke.innerHTML = data.value))
    .catch(
      () =>
        (joke.innerHTML =
          "chuck norris website does not fail!!!, you are simply too little to see it")
    );
}
