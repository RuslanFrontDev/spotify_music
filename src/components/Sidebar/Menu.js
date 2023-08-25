import React from 'react'
import { Icon } from "icons/icon"
import { NavLink } from 'react-router-dom'
export const Menu = () => {
   return (
      <nav className='px-2 bg-'>
         <ul className='flex flex-col'>
            <li>

               <NavLink style={({ isActive }) => ({
                  backgroundColor: isActive ? "#282828" : "transparent",
                  color: isActive ? "white" : "#b3b3b3"
               })} to="/" className='h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-2'>
                  <span>
                     <Icon name="home" />
                  </span>
                  Ana Səhifə</NavLink>
            </li>
            <li>
               <NavLink style={({ isActive }) => ({
                  backgroundColor: isActive ? "#282828" : "transparent",
                  color: isActive ? "white" : "#b3b3b3"
               })} to="/search" className='h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 gap-2'>
                  <span>
                     <Icon name="search" />
                  </span>
                  Axtar</NavLink>
            </li>
            <li>
               <NavLink style={({ isActive }) => ({
                  backgroundColor: isActive ? "#282828" : "transparent",
                  color: isActive ? "white" : "#b3b3b3"
               })} to='/collection' className='h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 gap-2'>
                  <span>
                     <Icon name="book" />
                  </span>Kitablıqların</NavLink>
            </li>
         </ul>
      </nav>
   )
}
