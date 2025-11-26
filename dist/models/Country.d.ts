export interface FullName {
    name: string;
    nativeName: string;
}
export declare class Country {
    fullName: FullName;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: string;
    borderCountries: string[];
    image: string;
    code: string;
    constructor(fullName: FullName, population: number, region: string, subRegion: string, capital: string, topLevelDomain: string, currencies: string, languages: string, borderCountries: string[], image: string, code: string);
    displayDetails(): string;
}
//# sourceMappingURL=Country.d.ts.map