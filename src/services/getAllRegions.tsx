import type { Country } from '../types/country.tsx'

export async function getAllRegions(): Promise<string[]> {
    const res = await fetch('/data.json').then(d => d.json() as Promise<Country[]>);
    const regions = new Set(res.map((reg: Country) => reg.region));
    return Array.from(regions) ;
}