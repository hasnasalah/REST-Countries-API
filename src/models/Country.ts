export interface FullName{
    name:string;
    nativeName:string;
}
export class Country{
     fullName:FullName;
     population:number;
      region:string;
      subRegion:string;
      capital:string;
      currencies:string;
      languages:string;
      borderCountries:string;
      image:string;
      constructor(fullName:FullName,population:number,region:string,subRegion:string,capital:string,currencies:string,languages:string,borderCountries:string,image:string){
        this.fullName=fullName;
        this.population=population;
        this.region=region;
        this.subRegion=subRegion;
        this.capital=capital;
        this.currencies=currencies;
        this.languages=languages;
        this.borderCountries=borderCountries;
        this.image=image;
      }


displayDetails(): string {
        return `
        Name: ${this.fullName.name}
        Native Name: ${this.fullName.nativeName}
        Population: ${this.population}
        Region: ${this.region}
        Capital: ${this.capital}
        Currencies: ${this.currencies}
        Languages: ${this.languages}
        Border Countries: ${this.borderCountries}
        `;
    }
}