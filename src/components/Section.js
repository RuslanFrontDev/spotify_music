
import React from 'react'
import SongItem from './SongItem'
import { NavLink } from 'react-router-dom'

const Section = ({ title, more = false, items }) => {
  return (
    <section className='w-full h-[280px] overflow-hidden'>
      <header className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-white font-semibold tracking-tight'>{title}</h3>
        {more && (
          <NavLink className={"text-xs font-semibold uppercase text-link hover:text-white hover:underline tracking-wider"} to={more}>See All</NavLink>
        )}
      </header>
      <div className='flex flex-wrap gap-x-6'>
        {items.map((item) => <SongItem item={item} key={item.id}/>)}

      </div>
    </section>
  )
}

export default Section