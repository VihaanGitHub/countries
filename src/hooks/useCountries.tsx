import { useEffect, useState } from "react"
import type { Country } from "../types/country";
import { getAllCountries } from "../services/getAllCountries";



export const useCountries=()=>{
    const [countries,setCountries] = useState<Country[] | null>(null);
    useEffect(()=>{
       async function fetchCountries() {
            let temp =  await getAllCountries();
            setCountries(temp)
       }
       fetchCountries();
       
        
    },[

    ])
    return[
        countries,
    ]

}