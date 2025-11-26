export class Country {
    fullName;
    population;
    region;
    subRegion;
    capital;
    topLevelDomain;
    currencies;
    languages;
    borderCountries;
    image;
    code;
    constructor(fullName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borderCountries, image, code) {
        this.fullName = fullName;
        this.population = population;
        this.region = region;
        this.subRegion = subRegion;
        this.capital = capital;
        this.topLevelDomain = topLevelDomain;
        this.currencies = currencies;
        this.languages = languages;
        this.borderCountries = borderCountries;
        this.image = image;
        this.code = code;
    }
    displayDetails() {
        return `
        Name: ${this.fullName.name}
        Native Name: ${this.fullName.nativeName}
        Population: ${this.population}
        Region: ${this.region}
        Capital: ${this.capital}
        top Level Domain:${this.topLevelDomain}
        Currencies: ${this.currencies}
        Languages: ${this.languages}
        Border Countries: ${this.borderCountries}
        Codes: ${this.code}
        `;
    }
}
//# sourceMappingURL=Country.js.map