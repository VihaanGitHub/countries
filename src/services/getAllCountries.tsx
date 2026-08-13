import type { Country } from "../types/country";

export async function getAllCountries(region:string,country:string): Promise<Country[]> {
    const res:Country[] = await fetch('/data.json').then(d=>d.json());
    let final = res;
   if(region && country){
      final = res.filter(con=>con.region===region && con.name.toLocaleLowerCase().includes(country.toLocaleLowerCase()))
   }
   else{
      final = res.filter(con=>con.region===region || con.name.toLocaleLowerCase().includes(country.toLocaleLowerCase()))

   }
    return final;
    
}