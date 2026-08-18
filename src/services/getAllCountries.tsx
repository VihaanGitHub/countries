import type { Country } from "../types/country";

export async function getAllCountries(region: string, country: string): Promise<Country[]> {
  const res: Country[] = await fetch('/data.json').then(r => r.json());

  return res.filter(con =>(!region || con.region === region) &&(!country || con.name.toLowerCase().includes(country.toLowerCase().trim()))
  );
}