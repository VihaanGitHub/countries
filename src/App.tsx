import Card from './components/Card';
import CountriesGrid from './components/CountriesGrid';
import Header from './components/Header'
import RegionFilter from './components/RegionFilter';
import SearchInput from './components/SearchInput';
import { useCountries } from './hooks/useCountries'
import type { Country } from './types/country';

export default function App() {
  const { countries, setCountry,setRegion} = useCountries() as { countries: Country[],setCountry: () => void ,setRegion: React.Dispatch<React.SetStateAction<string>> }; // tell TS the first item is Country[]
    if (!Array.isArray(countries)) return <div>Loading...</div>; // guard before using map

  return (
    <div>
        <Header/>
       <div className='flex py-7  justify-between px-10'>
           <SearchInput setCountry={setCountry}/>
          <RegionFilter/>

       </div>
     <CountriesGrid>
        {countries.map((country:Country)=>
        {
          return(
          // <Card key={country.name} countryname={country.name} flag={country.flags.png} population={country.population} />
     <div className='shadow-md bg-elements h-[60vh] '>
      <div className="rounded bg-elements h-1/2  ">
        <img src={country.flags.png} alt="" className='w-full h-full' />
      </div>
      <div className='px-10 h-1/2 '>
        <p className='text-text text-xl py-5 font-extrabold'>{country.name}</p>
        <p><span className='font-bold'>Population: </span><span>{country.population.toLocaleString()}</span></p>
        <p><span className='font-bold'>Region: </span><span>{country.region}</span></p>
        <p><span className='font-bold'>Capital: </span><span>{country.capital}</span></p>
      </div>
    </div>
        )})}
     </CountriesGrid>
    </div>
  )
}
