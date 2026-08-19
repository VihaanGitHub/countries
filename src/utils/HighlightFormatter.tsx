import type { Country } from "../types/country";

export const left: Record<keyof Pick<Country, "population" | "region" | "subregion" | "capital">, string> = {
  population: "Population",
  region: "Region",
  subregion: "Sub Region",
  capital: "Capital",
};


export const right = {
  topLevelDomain: {
    label: "Top-Level Domain",
    getValue: (country:Country) => country.topLevelDomain,
  },
  currencies: {
    label: "Currency",
    getValue: (country:Country) =>
      country.currencies?.map(i => `${i.name} (${i.symbol})`).join(", "),
  },
  languages: {
    label: "Languages",
    getValue: (country:Country) =>
      country.languages?.map(i => i.name).join(", "),
  },
};