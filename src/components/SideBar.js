import React from 'react'
import { Menu } from './Sidebar/Menu'
import { Icon } from 'icons/icon'
import PlayLists from './Sidebar/PlayLists'
import DownloadApp from './Sidebar/DownloadApp'

const SideBar = () => {
  return (
    <aside className='w-60 py-6 flex flex-shrink-0 flex-col '>
      <Menu />
      <nav className='mt-6'>
        <ul>
          <li>
            <a href='#' className='group h-10 py-2 px-5 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-2 '>
              <span className='opacity-60 group-hover:bg-opacity-100 w-8 h-8 bg-blue-50 mr-2 flex items-center justify-center rounded-sm text-blue-400'>
                <Icon name="plus" />
              </span>
              Musiqi çaları yarat

            </a>
          </li>
          <li>
            <a href='#' className='group h-10 py-2 px-5 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-2'>
              <span className='w-8 h-8 bg-gradient-to-br from-blue-300 to-indigo-500   mr-2 text-center flex items-center justify-center rounded text-white opacity-60 group-hover:opacity-100'>
                <Icon name="heart" />
              </span>
              Bəyəndiiyiniz musiqilər

            </a>
          </li>
        </ul>

      </nav>
      <PlayLists/>
      <DownloadApp/>
    </aside>
  )
}

export default SideBar