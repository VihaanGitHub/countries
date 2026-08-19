import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput({setCountry}: {setCountry: React.ChangeEventHandler<HTMLInputElement>}) {
  return (
    <div className='relative w-full '>
      <IoSearchSharp size={20} className='absolute left-2 top-0 translate-y-1/2 '/>
      <input onChange={setCountry} type="search" className='bg-elements w-full md:w-fit rounded px-6 pl-10 pr-10  py-2 outline-none' placeholder='Search by country name... '/>
    </div>
  )
}
