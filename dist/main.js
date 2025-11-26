import { getCountryData } from "./services/apiService.js";
async function diplayData() {
    const countries = await getCountryData();
    try {
        for (let country of countries) {
            console.log(country.displayDetails());
        }
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}
diplayData();
//# sourceMappingURL=main.js.map