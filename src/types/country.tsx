export interface Country{
    name:string,
    region:string,
    subregion:string,
    population:number,
    flags:{
        svg:string,
        png:string
    },
    alpha3Code:string,
    cioc:string,
    capital:string,
    nativeName:string,
    topLevelDomain:string[],
    currencies:[{
        code:string,
        name:string,
        symbol:string
    }],
    languages:[{
        "iso639_1":string,
        "iso639_2":string,
        "name": string,
        "nativeName":string
    }],
    borders:string[] 
}