import { useEffect, useState } from "react"
import type { Country } from "../types/country";
import { getAllCountries } from "../services/getAllCountries";
import { getAllRegions } from "../services/getAllRegions";
import useDebounce from './useDebounce';



export const useCountries=()=>{
    const [countries,setCountries] = useState<Country[]>([]);
    const [regions,setRegions] = useState<string[]>([]);
    const[region,setRegion] = useState<string|"">("");
    const [country,setCountry] = useState<string|"">("");


    const debouncedSearchTerm = useDebounce(country, 300); 


    useEffect(()=>{
       async function fetchCountries() {
            let regions = await getAllRegions();
            let temp =  await getAllCountries(region,debouncedSearchTerm);
            setCountries(temp)
         
            setRegions(regions);
       }
       fetchCountries();
    },[region,debouncedSearchTerm]);  
    

    function SetCountryHandler(event: React.ChangeEvent<HTMLInputElement>){
        setCountry(event.target.value);
    }

    
    return{
        countries,
        country,
        setCountry:SetCountryHandler,
        region,setRegion,
        regions
    }

}

