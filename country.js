
// This file fetches country data from an API and dynamically creates HTML elements to display the information.

// Select the container element where country information will be displayed.
const container = document.querySelector('.container');
// Select the search input element.
const input = document.querySelector('#search');
// Define the API URL for fetching country data.
const url = 'https://restcountries.com/v3.1/all';

// Define a function 'check' to log the current value of the search input.
// This function is not currently used but could be implemented for search functionality.
function check(){
    console.log(input.value)
}

// Add an 'input' event listener to the search input, calling the 'check' function whenever the input value changes.
input.addEventListener('input',check);

// Fetch data from the API URL.
fetch(url)
// Parse the response as JSON.
.then((res)=> res.json())
// Process the fetched country data.
.then((data) =>{ 
    // Iterate over each country in the data array.
    data.map((item)=>{
        // Create HTML elements for displaying country information.
        const country = document.createElement('div');
        const name = document.createElement('h1');
        const flag = document.createElement('img');
        const population = document.createElement('p');
        const region = document.createElement('p');
        const capital = document.createElement('p');

        // Populate the HTML elements with data from the API response.
        population.innerHTML ='popolation: ' + item.population.toLocaleString();
        region.innerHTML = 'region: ' + item.region;
        capital.innerHTML ='capital: ' + item.capital;
        flag.src = item.flags.png;
        country.classList.add('country');
        name.innerHTML = item.name.common;

        // Append the created elements to the country div.
        country.append(flag);
        country.append(name);
        country.append(population);
        country.append(region);
        country.append(capital);

        // Append the country div to the container.
        container.append(country);
    })
})
