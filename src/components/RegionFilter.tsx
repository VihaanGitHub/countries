import { useCountries } from '../hooks/useCountries'

export default function RegionFilter({setRegion,region,regions}:{setRegion:React.Dispatch<React.SetStateAction<string>>,region:string,regions:string[]}) {

  return (
    <div className='bg-elements flex-col flex w-52 justify-center group   relative items-center px-5 py-2 select-none cursor-pointer'>
   {region ||   "Filter by Region "}
     <div className=' absolute top-full pt-1.5 hidden w-full  group-hover:block '>
  
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
