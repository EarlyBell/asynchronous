const container =
  document.querySelector(".container");
const input = document.querySelector("#search");
const url = "https://restcountries.com/v3.1/all";

const getData = () => {
container.innerHTML = ' '
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      data.map((item) => {
        if (input.value.length < 1) {
          const country =
            document.createElement("div");
          const name =
            document.createElement("h1");
          const flag =
            document.createElement("img");
          const population =
            document.createElement("p");
          const region =
            document.createElement("p");
          const capital =
            document.createElement("p");

          population.innerHTML =
            "popolation: " +
            item.population.toLocaleString();
          region.innerHTML =
            "region: " + item.region;
          capital.innerHTML =
            "capital: " + item.capital;
          flag.src = item.flags.png;
          country.classList.add("country");
          name.innerHTML = item.name.common;

          country.append(flag);
          country.append(name);
          country.append(population);
          country.append(region);
          country.append(capital);
          container.appendChild(country);

          country.addEventListener('click',()=>{
            const modal = document.createElement('div')
            const language = document.createElement('p')
            const currency = document.createElement('p')
            language.innerHTML = 'language: ' + Object.values(item.languages)
            modal.classList.add('modal')
            modal.append(fllation);
            country.append(region);
            country.append(capital);
  
            country.addEventListener('click',()=>{
            modal.append(name)
            modal.append(population)
            modal.append(region)
            modal.append(capital)
            modal.append(language)
            modal.append(currency)

            container.append(modal)
          })

          container.append(country);
        })} else if (
          item.name.common
            .toLowerCase()
            .includes(input.value.toLowerCase())
        ) {
          const country =
            document.createElement("div");
          const name =
            document.createElement("h1");
          const flag =
            document.createElement("img");
          const population =
            document.createElement("p");
          const region =
            document.createElement("p");
          const capital =
            document.createElement("p");

          population.innerHTML =
            "popolation: " +
            item.population.toLocaleString();
          region.innerHTML =
            "region: " + item.region;
          capital.innerHTML =
            "capital: " + item.capital;
          flag.src = item.flags.png;
          country.classList.add("country");
          name.innerHTML = item.name.common;

          country.append(flag);
          country.append(name);
          country.append(population);
          country.append(region);
          country.append(capital);

          container.append(country);
        }
      });
    });
};
getData();
input.addEventListener("input", getData);
