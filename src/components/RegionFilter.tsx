import { useCountries } from '../hooks/useCountries'

export default function RegionFilter({setRegion,region,regions}:{setRegion:React.Dispatch<React.SetStateAction<string>>,region:string,regions:string[]}) {

  return (
    <div className='bg-elements perspective-distant flex-col mt-6 md:mt-0 flex w-52 justify-center group   relative items-center px-5 py-2 select-none cursor-pointer'>
   {region ||   "Filter by Region "}
     <div className=' absolute -rotate-x-90 opacity-0  origin-top top-full pt-1.5 shadow-sm  w-full transition-all duration-400  group-hover:rotate-x-0 group-hover:opacity-100  '>
  
       <div  className={` bg-elements  rounded `}>
        <p className='px-2 py-1 cursor-pointer ' onClick={()=>setRegion("")} >All</p>
        {regions.map(reg=>(
          <p className='px-2 py-1 cursor-pointer ' onClick={()=>setRegion(reg)} >{reg}</p>
        ))}
      </div>
     </div>
    </div>
  )
}
