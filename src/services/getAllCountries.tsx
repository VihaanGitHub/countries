import type { Country } from "../types/country";

export async function getAllCountries(): Promise<Country[]> {
    const res = await fetch('/data.json').then(d=>d.json());
    return res;
    
}