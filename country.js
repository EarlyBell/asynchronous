const container = document.querySelector('.container')

const url = 'https://restcountries.com/v3.1/all'
function check(){
    console.log('hello')
}
check()
fetch(url)
.then((res)=> res.json())
.then((data) =>{
    data.map((item)=>{
        const country = document.createElement('div')
        const name = document.createElement('h1')
        const flag = document.createElement('img')
        const population = document.createElement('p')
        const region = document.createElement('p')
        const capital = document.createElement('p')
        
        population.innerHTML ='popolation: ' + item.population.toLocaleString()
        region.innerHTML = 'region: ' + item.region
        capital.innerHTML ='capital: ' + item.capital
        flag.src = item.flags.png
        country.classList.add('country')
        name.innerHTML = item.name.common
        country.append(flag)
        country.append(name)
        country.append(population)
        country.append(region)
        country.append(capital)
        container.append(country)
    })
})


