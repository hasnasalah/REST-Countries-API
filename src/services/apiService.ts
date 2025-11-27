import { Country } from "../models/Country.js";
import { NetworkError } from "../models/NetworkError.js";
import { DataError } from "../models/DataError.js";

export async function getCountryData():Promise<Country[]>{
     const url = "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,tld,subregion,currencies,languages,borders,flags";
     const url2 = "https://restcountries.com/v3.1/all?fields=cca2,cca3,population,region";

  try {
    const response = await fetch(url);
    const respense2=await fetch(url2);
    if (!response.ok || !respense2.ok) {
      throw new NetworkError(`Response status: ${response.status}`);
    }
  
    const result = await response.json();
   const codesData = await respense2.json();
   
    const countries:Country[]=[];
    
     for (const c of result) {

    
     const nativeNames: any = c.name.nativeName ? Object.values(c.name.nativeName)[0] : null;
     const topLevelDomain = c.tld ? c.tld.join(", ") : "";
    const currencies = c.currencies ? Object.values(c.currencies).map((cur: any) => cur.name).join(", ") : "";
    const languages = c.languages ? Object.values(c.languages).join(", ") : "";
      const code = [c.cca2, c.cca3].join(", ");
    
  

let borderNames: string[] = [];

if (c.borders && Array.isArray(c.borders)) {
  for (let borderCode of c.borders) {
    let borderName = borderCode;

    for (let r of result) {
      if (r.cca3 === borderCode) {
        borderName = r.name.official;
        break;
      }
    }

    borderNames.push(borderName);
  }
}

      const fullName = {
        name: c.name.official,
        nativeName: nativeNames?.official || c.name.official,
           };

      const match = codesData.find((cd: any) => cd.cca2 === c.cca2 ||cd.cca3 === c.cca3);
     const population = match?.population;
     const region = match?.region;

      const country = new Country(fullName,population,region,c.subregion,c.capital,topLevelDomain,currencies,languages,borderNames,c.flags.png,code);

      countries.push(country);
    }

    return countries;
  } catch (error: any) {
    console.error(error.message);
    throw new DataError("Failed to load country data");
  }

};
