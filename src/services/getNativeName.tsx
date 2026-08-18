import type { Country } from "../types/country";
import { BorderFormatter } from "../utils/Formatter";

export async function getCountry(name: string):Promise<Country> {
  const res:Country[] = await fetch('/data.json').then(r => r.json());
  let foundCountry = res.filter(con =>con.name.toLowerCase() === name.toLowerCase())[0];
  let borders = foundCountry?.borders?.map(bor=>{
      return BorderFormatter(res,bor)
  }) ;
  foundCountry.borders = borders;
  return foundCountry ;
  
}

