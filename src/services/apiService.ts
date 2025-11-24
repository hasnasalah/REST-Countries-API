import { Country } from "../models/Country";
import { NetworkError } from "../models/NetworkError";
import { DataError } from "../models/DataError";

export async function getCountryData():Promise<Country[]>{
     const url = "https://restcountries.com/v3.1/all?status=true&fields=name,popultion,region,capital,flags,subregion,currencies,languages,borders";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NetworkError(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const countries:Country[]=[];
     for (const c of result.countries) {

       const firstField = Object.values(c.name.nativeName)[0];
       

      const fullName = {
        name: c.name.official,
        nativeName: c.name.nativeName.firstField.official,
      };

      const country = new Country(
        fullName,
        c.population,
        c.region,
        c.subregion,
       c.capital,
       c.currencies,
       c.languages,
       c.borderCountries,
       c.image
      );

      countries.push(country);
    }

    return countries;
  } catch (error: any) {
    console.error(error.message);
    throw new DataError("Failed to load country data");
  }

};
