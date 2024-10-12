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


let data = ['a','b','c','d']

function call(){
    setTimeout(()=>{
        const body = document.querySelector('body')
        body.innerHTML = ''
        data.forEach((item)=>{
            const arrItem = document.createElement('p')
            arrItem.textContent = item
        body.append(arrItem)
        })
    },1000)
}



function newItem(item,callback ){
    setTimeout(()=>{
        data.push(item)
        callback()
    },5000)
}

newItem('slate',call)