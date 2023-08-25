import React from 'react'
import { Outlet } from 'react-router-dom'

const SearchLayout = () => {
  return (
    <div className='mr-auto ml-4 flex w-[55%] items-center '>
      <Outlet/>
    </div>
  )
}

export default SearchLayout