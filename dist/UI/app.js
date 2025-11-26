import { getCountryData } from "../services/apiService.js";
const ul = document.getElementById("ul");
let allCountries = [];
//search 
const search = document.getElementById("search");
// show details 
const countryModaL = document.getElementById("country-modal");
const image = document.getElementById("image-container");
const infoA = document.getElementById("info-a");
const infoB = document.getElementById("info-b");
const infoC = document.getElementById("info-c");
const info = document.getElementById("info");
const title = document.getElementById("title");
async function displayData(countries = allCountries) {
    if (!ul || !search)
        return;
    ul.style.display = "grid";
    ul.innerHTML = "";
    const fragment = document.createDocumentFragment();
    countries.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.image;
        img.style.height = "auto";
        const name = document.createElement("h3");
        name.innerHTML = item.fullName.name;
        const population = document.createElement("p");
        population.innerHTML = `<strong>Population: </strong> ${item.population}`;
        const region = document.createElement("p");
        region.innerHTML = "<strong>Region: </strong>" + item.region;
        const capital = document.createElement("p");
        capital.innerHTML = "<strong>Capital: </strong>" + item.capital;
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(population);
        li.appendChild(region);
        li.appendChild(capital);
        li.addEventListener("click", () => {
            if (!countryModaL)
                return;
            countryModaL.style.display = "grid";
            ul.style.display = "none";
            showCountryDetails(item);
        });
        fragment.appendChild(li);
    });
    ul.appendChild(fragment);
}
window.addEventListener("DOMContentLoaded", async () => {
    allCountries = await getCountryData();
    displayData();
});
const filter = document.getElementById("region-filter");
function filterByRegion(countries = allCountries, region) {
    return countries.filter(countries => countries.region === region);
}
filter?.addEventListener("change", async () => {
    allCountries = await getCountryData();
    let selectedRegion = filter.value;
    let filtredArray = filterByRegion(allCountries, selectedRegion);
    displayData(filtredArray);
});
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-toggle');
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', "null");
};
if (darkmode === "active")
    enableDarkmode();
themeSwitch?.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
function showCountryDetails(country) {
    clearModal();
    if (!countryModaL || !infoA || !info || !infoB || !infoC || !image || !title)
        return;
    const img = document.createElement("img");
    img.src = country.image;
    img.style.height = "auto";
    image?.appendChild(img);
    const name = document.createElement("h3");
    name.innerHTML = country.fullName.name;
    title?.appendChild(name);
    const nativeName = document.createElement("p");
    nativeName.innerHTML = `<strong>Native Name: </strong> ${country.fullName.nativeName}`;
    const population = document.createElement("p");
    population.innerHTML = `<strong>Population: </strong> ${country.population}`;
    const region = document.createElement("p");
    region.innerHTML = `<strong>Region: </strong> ${country.region}`;
    const subRegion = document.createElement("p");
    subRegion.innerHTML = `<strong>Sub Region: </strong> ${country.subRegion}`;
    const capital = document.createElement("p");
    capital.innerHTML = `<strong>Capital: </strong> ${country.capital}`;
    infoA.appendChild(nativeName);
    infoA.appendChild(population);
    infoA.appendChild(region);
    infoA.appendChild(subRegion);
    infoA.appendChild(capital);
    const tlp = document.createElement("p");
    tlp.innerHTML = `<strong>Top Level Domain: </strong> ${country.topLevelDomain}`;
    const currencie = document.createElement("p");
    currencie.innerHTML = `<strong>Currencies: </strong> ${country.currencies}`;
    const language = document.createElement("p");
    language.innerHTML = `<strong>Languages: </strong> ${country.languages}`;
    infoB.append(tlp, currencie, language);
    const border = document.createElement("div");
    border.classList.add("border-container");
    const p = document.createElement("strong");
    p.textContent = "Borders: ";
    border.appendChild(p);
    country.borderCountries.forEach(name => {
        const btn = document.createElement("button");
        btn.textContent = name;
        btn.classList.add("border-btn");
        btn.addEventListener("click", () => {
            const found = allCountries.find(c => c.fullName.name === name);
            if (found) {
                showCountryDetails(found);
            }
        });
        border.appendChild(btn);
    });
    infoC.appendChild(border);
}
function clearModal() {
    if (!image || !infoA || !infoB || !infoC || !info || !title)
        return;
    title.innerHTML = "";
    image.innerHTML = "";
    infoA.innerHTML = "";
    infoB.innerHTML = "";
    infoC.innerHTML = "";
}
const closeModalBtn = document.getElementById("close-modal");
closeModalBtn?.addEventListener("click", () => {
    if (!countryModaL || !ul)
        return;
    countryModaL.style.display = "none";
    ul.style.display = "grid";
    clearModal();
});
const searchError = document.getElementById("search-error");
search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const inputValue = search.value.toLowerCase().trim();
        if (!inputValue) {
            if (searchError) {
                searchError.textContent = "Please type a country name.";
                searchError.style.display = "block";
            }
            return;
        }
        else {
            if (searchError)
                searchError.style.display = "none";
        }
        for (let item of allCountries) {
            if (item.fullName.name.toLowerCase().includes(inputValue)) {
                showCountryDetails(item);
                if (ul)
                    ul.style.display = "none";
                if (countryModaL)
                    countryModaL.style.display = "grid";
                search.value = "";
                break;
            }
        }
    }
});
//# sourceMappingURL=app.js.map