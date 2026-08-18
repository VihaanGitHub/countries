import { useMemo, useState } from 'react'
import type { Country } from '../types/country'
import { getCountry } from '../services/getNativeName';

export default function useDetailsCountry(name:string) {
    const [country,setCountry] = useState<Country>();
    useMemo(async()=>{
        const data =await getCountry(name);
        console.log(data);
        
        setCountry(data)
    },[name])

  return {
    country
  }
}
