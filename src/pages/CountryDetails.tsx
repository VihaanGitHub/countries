import React from 'react'
import Utton from '../components/utton';
import { IoMdArrowBack } from 'react-icons/io';

export default function CountryDetails() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("name");
    console.log(value);

  return (
    <div className='px-10 py-15'>
      <Utton />
      <div className='mt-10 flex'>
            <div className="flex flex-[0.45]">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Republic_of_Venice_%281659-1675%29.svg/330px-Flag_of_Republic_of_Venice_%281659-1675%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" className='w-full' alt="flag" />
        </div>
      <div className="flex flex-col pl-20 flex-[0.65]">
            <div className='flex flex-1 '>
                  <div className="flex flex-col gap-3 flex-[0.5] h-auto ">
            <h2 className='font-extrabold text-text text-3xl'>Republic of Venice</h2>
            <p className='mt-5'><span className="font-bold text-text">Native Name: </span><span className='text-text'>Republica Veneta</span></p>
            <p><span className="font-bold text-text">Population: </span><span className='text-text'>Approximately infinite</span></p>
            <p><span className="font-bold text-text">Region: </span><span className='text-text'>Europe</span></p>
            <p><span className="font-bold text-text">Sub Region: </span><span className='text-text'>Southern Europe</span></p>
            <p><span className="font-bold text-text">Capital: </span><span className='text-text'>Venice</span></p>
        




        </div>
        <div className="flex flex-col flex-[0.5] mt-17 gap-3">
            <p><span className="font-bold text-text">Top-Level Domain: </span><span className='text-text'>.rve</span></p>
            <p><span className="font-bold text-text">Currency: </span><span className='text-text'>Venetian ducat (Ducato)</span></p>
            <p><span className="font-bold text-text">Languages: </span><span className='text-text'>Venetian, Italian, Latin</span></p>


        </div>
            </div>

            {/* Borders */}
                    <div
                    className=' mt-17 flex items-start '
                    >
                         <p className="font-bold text-text  pt-3 ">Border Countries: </p>

            <div className="flex flex-wrap  flex-[0.7]">
                      <div className="bg-elements h-fit px-4 py-2 m-2 shadow-sm rounded ">Asia</div>
                      <div className="bg-elements h-fit px-4 py-2 m-2 shadow-sm rounded ">Asia</div>
                      <div className="bg-elements h-fit px-4 py-2 m-2 shadow-sm rounded ">Asia</div>
                     
                     </div>
                    </div>

      </div>
      
      
      </div>
    </div>
  )
}
