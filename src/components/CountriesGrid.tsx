import React from 'react'

export default function CountriesGrid({children}:{children:React.ReactNode}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 md:gap-10 gap-4  '>
      {children}
    </div>
  )
}
