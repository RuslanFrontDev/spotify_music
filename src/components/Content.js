import React from 'react'
import Navbar from './Navbar'
import Home from 'pages/Home'
import { Search } from 'pages/Search'
import { Collections } from 'pages/Collections'
import { Route, Routes } from 'react-router-dom'

const Content = () => {
   return (
      <main className='flex-auto overflow-auto'>
         <Navbar />
       <div className='px-8 pt-5 '>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/collection' element={<Collections/>}/>
         </Routes>
       </div>
      </main>
   )
}

export default Content