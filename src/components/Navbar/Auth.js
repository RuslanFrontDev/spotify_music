import React from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from 'icons/icon'
const Auth = () => {
   const user = {
      name: "RuslanRustemov",
      avatar: '../../img/qiz.jpg'
   }
   return (
      <Menu as="nav" className={"relative"}>
         {({ open }) => (
            <>
               <Menu.Button className={`flex items-center h-8 pr-2 rounded-3xl ${open ? "bg-activeColor" : "bg-black"} hover:bg-activeColor`}>
                  <img src={user.avatar} className='w-8 h-8 rounded-full p-px mr-2' />
                  <span className='text-sm font-semibold mr-2'>{user.name}</span>
                  <span className={open && 'rotate-180'}>
                  <Icon name="down" size={16} />
                  </span>
               </Menu.Button>
               <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-avtiveColor translate-y-2"}>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-blue-500'}`}
                           href="/account-settings"
                        >
                           Account
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-blue-500'}`}
                           href="/account-settings"
                        >
                          Profile
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-blue-500'}`}
                           href="/account-settings"
                        >
                          Log Out
                        </a>
                     )}
                  </Menu.Item>
               </Menu.Items>
            </>
         )}
      </Menu>
   )
}

export default Auth