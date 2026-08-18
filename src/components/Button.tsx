import React from 'react'
import { IoMdArrowBack } from "react-icons/io";

export default function Button() {
  return (
         <div className="bg-elements select-none cursor-pointer p-6 w-fit  px-5 py-2 flex items-center gap-3 rounded" onClick={
       ()=>{
         window.history.back()
       }
       }>

        
            <IoMdArrowBack /> <span className='text-text'>Back </span>
        </div>



  )
}
