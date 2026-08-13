import React from 'react'

export default function Card({flag,countryname, population, region, capital}:{flag:string,countryname:string, population:number, region:string, capital:string }) {
  return (
    <div className='shadow-md bg-elements '>
      <div className="rounded bg-elements ">
        <img src={flag} alt="" className='w-full' />
      </div>
      <div className='px-10'>
        <p className='text-text text-xl py-5 font-extrabold'>{countryname}</p>
        <p><span className='font-bold'>Population: </span><span>{population}</span></p>
        <p><span className='font-bold'>Region: </span><span>{region}</span></p>
        <p><span className='font-bold'>Capital: </span><span>{capital}</span></p>
      </div>
    </div>
  )
}
