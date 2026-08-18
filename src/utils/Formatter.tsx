import type { Country } from "../types/country";

export const BorderFormatter = (res:Country[],alpha3code:string):string =>{
    return res?.filter(count=>count.alpha3Code ===alpha3code)[0].name;
}