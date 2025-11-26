import { Country } from "../models/Country.js";
import { NetworkError } from "../models/NetworkError.js";
import { DataError } from "../models/DataError.js";

export async function getCountryData():Promise<Country[]>{
     const url = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,tld,subregion,currencies,languages,borders,flags";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NetworkError(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const countries:Country[]=[];
    
     for (const c of result) {

    
     const nativeNames: any = c.name.nativeName ? Object.values(c.name.nativeName)[0] : null;
     const topLevelDomain = c.tld ? c.tld.join(", ") : "";
    const currencies = c.currencies ? Object.values(c.currencies).map((cur: any) => cur.name).join(", ") : "";
    const languages = c.languages ? Object.values(c.languages).join(", ") : "";
     const borderCountries = c.borders ? c.borders.join(", ") : "None";
      const fullName = {
        name: c.name.official,
        nativeName: nativeNames?.official || c.name.official,
           };

      const country = new Country(
        fullName,
        c.population,
        c.region,
        c.subregion,
       c.capital,
       topLevelDomain,
       currencies,
       languages,
       borderCountries,
       c.flags.png 
      );

      countries.push(country);
    }

    return countries;
  } catch (error: any) {
    console.error(error.message);
    throw new DataError("Failed to load country data");
  }

};
