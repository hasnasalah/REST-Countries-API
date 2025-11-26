import {getCountryData} from "../services/apiService.js"
import {Country} from "../models/Country.js"
const ul=document.getElementById("ul");
let allCountries: Country[] = [];   


// show details 
   const countryModaL=document.getElementById("country-modal");
   const image=document.getElementById("image-container");
   const infoA=document.getElementById("info-a");
   const infoB=document.getElementById("info-b");
   const infoC=document.getElementById("info-c");
   const info=document.getElementById("info");
   const title=document.getElementById("title");




async function displayData(countries: Country[] = allCountries){

  if (!ul) return;
    ul.style.display = "grid";
    
    ul.innerHTML = ""; 



    const fragment = document.createDocumentFragment();

    countries.forEach(item => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = item.image;   
        img.style.height = "auto";
        
        const name:HTMLElement = document.createElement("h3");
            name.innerHTML=item.fullName.name;

        const population:HTMLElement = document.createElement("p");
        population.innerText = `Population: ${item.population}`; 
        const region:HTMLElement = document.createElement("p");
        region.innerText = "Region "+item.region; 

          const capital:HTMLElement = document.createElement("p");
        capital.innerText = "Capital "+item.capital; 
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(population);
        li.appendChild(region);
        li.appendChild(capital);

          li.addEventListener("click", () => {
            if(!countryModaL)return;
             countryModaL.style.display = "grid";
                ul.style.display = "none";
      showCountryDetails(item);
    });

        fragment.appendChild(li);
    });

    ul.appendChild(fragment);
}
window.addEventListener("DOMContentLoaded", async () => {
  allCountries=await getCountryData() ;
  displayData(); 
});

const filter=document.getElementById("region-filter") as HTMLSelectElement;

function filterByRegion(countries: Country[] = allCountries,region:string) {
    return countries.filter(countries => countries.region === region);
}

filter?.addEventListener("change", async()=> {

    allCountries=await getCountryData() ;
let selectedRegion=filter.value;

let filtredArray=filterByRegion(allCountries,selectedRegion);
displayData(filtredArray);
});

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-toggle')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode',"null")
}

if(darkmode === "active") enableDarkmode()

themeSwitch?.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});


function showCountryDetails(country: Country) {
  clearModal();
    if(!countryModaL||!infoA||!info||!infoB||!infoC||!image||!title) return;
    
       
        const img = document.createElement("img");
        img.src = country.image;   
        img.style.height = "auto";
        
        image?.appendChild(img);
        const name:HTMLElement = document.createElement("h3");
        name.innerHTML=country.fullName.name;
        title?.appendChild(name);

        const nativeName:HTMLElement=document.createElement("p");
        nativeName.innerHTML=`Native Name: ${country.fullName.nativeName}`;        
        const population:HTMLElement = document.createElement("p");
        population.innerText = `Population: ${country.population}`; 
        const region:HTMLElement = document.createElement("p");
        region.innerText = `Region: ${country.region}`; 
        const subRegion:HTMLElement=document.createElement("p");
        subRegion.innerText=`Sub Region : ${country.subRegion}`
        const capital:HTMLElement = document.createElement("p");
        capital.innerText = "Capital "+country.capital; 

        infoA.appendChild(nativeName);
        infoA.appendChild(population);
        infoA.appendChild(region);
        infoA.appendChild(subRegion)
        infoA.appendChild(capital);
        const tlp:HTMLElement=document.createElement("p");
        tlp.innerText=`Top Level Domain: ${country.topLevelDomain}`;
        const currencie=document.createElement("p");
        currencie.innerHTML=`Currencies: ${country.currencies}`;
        const language=document.createElement("p");
        language.innerHTML=`Lnaguages: ${country.languages}`;

        infoB.append(tlp,currencie,language);
    
        const border=document.createElement("p");
        border.innerHTML=`Borders: ${country.borderCountries}`;
         
        infoC.appendChild(border);

}
function clearModal() {
  if (!image || !infoA || !infoB || !infoC || !info||!title) return;
  title.innerHTML="";
  image.innerHTML = "";
  infoA.innerHTML = "";
  infoB.innerHTML = "";
  infoC.innerHTML = "";
}

const closeModalBtn = document.getElementById("close-modal");

closeModalBtn?.addEventListener("click", () => {
  if (!countryModaL || !ul) return;
  countryModaL.style.display = "none";
  ul.style.display = "grid";
  clearModal();
});