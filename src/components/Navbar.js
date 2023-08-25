import { Icon } from 'icons/icon'
import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import { Route, Routes } from 'react-router-dom'
import { Search } from 'pages/Search'
import SearchLayout from './navSearch/SearchLayout'
import NavSearch from './navSearch/NavSearch'

const Navbar = () => {
   return (
      <nav className='h-[3.75rem] flex items-center justify-between px-8'>
         <Navigation/>
         <Routes>
         <Route path='/search' element={<SearchLayout/>}>
               <Route index={true} element={<NavSearch/>}/>
            </Route>
         </Routes>
         <Auth/>
      </nav>
   )
}

export default Navbar