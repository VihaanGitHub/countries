import Button from '../components/Button';
import useDetailsCountry from '../hooks/useDetailsCountry';
import NotFound from './NotFound';
import { left, right } from '../utils/HighlightFormatter';
import HighLight from '../components/HighLight';
import type { Country } from '../types/country';

export default function CountryDetails() {
    const params: URLSearchParams = new URLSearchParams(window.location.search);
    let value = params.get("name") || "";
    const {country} = useDetailsCountry(value);


if(country){
    return (
    
    <div className='md:px-10 px-5 py-15'>
      <Button />
      <div className='mt-10 md:flex'>
            <div className="flex md:h-[400px] justify-center items-center flex-[0.45]">
        <img src={country?.flags.png} className='md:w-auto md:h-full w-full' alt="flag" />
        </div>
      <div className="flex flex-col md:pl-20 pt-5 md:pt-0 flex-[0.65]">
            <div className='md:flex flex-1 '>
                  <div className="flex flex-col gap-3 flex-[0.5] h-auto ">
            <h2 className='font-extrabold text-text md:mt-0 mt-5 text-3xl'>{country?.name}</h2>
            <p className='mt-5'><span className="font-bold text-text">Native Name: </span><span className='text-text'>{country?.nativeName}</span></p>
            {Object.entries(left).map(([key,label])=>{
              return <HighLight key={key} label={label} value={country[key as keyof Country].toLocaleString()}/>
            })}
        </div>
        <div className="flex flex-col flex-[0.5] mt-17 gap-3">
                {Object.entries(right).map(([key, item]) => (
                  <HighLight
                    key={key}
                    label={item.label}
                    value={item.getValue(country)}
                  />
                ))}
        </div>
            </div>

            {/* Borders */}
                    <div
                    className=' mt-17 md:flex items-center'
                    >
                         <p className="font-bold text-text  pt-3 ">Border Countries: </p>

            <div className="flex flex-wrap gap-3 md:gap-0  flex-[0.7]">
                      {country?.borders?.map((border)=>{
                        return(
                          <div key={border} className="bg-elements h-fit px-4 py-2 md:m-2 shadow-sm rounded ">{border}</div>
                        )
                      })||(
                          <div  className="bg-elements h-fit px-4 py-2 md:m-2 shadow-sm rounded ">No Bordering Countries Found</div>
                        
                      )}
                     </div>
                    </div>

      </div>
      
      </div>
    </div>
  )
}
else{
  return(
    <NotFound/>
  )
}
}
