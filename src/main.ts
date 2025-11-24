import { Country } from "./models/Country";
import {getCountryData} from "./services/apiService.js"

async function diplayData(){
    const countries: Country[] = await getCountryData();
    try{
      

        for(let country of countries)
        {
            console.log(country.displayDetails());
        }

    }
    catch(error:any){
       console.error("Error:", error.message);
    }

}
diplayData();


