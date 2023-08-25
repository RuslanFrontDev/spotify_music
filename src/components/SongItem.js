import classNames from 'classnames'
import { Icon } from 'icons/icon'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrent } from 'stores/playerSlice'

const SongItem = ({item}) => {
   const dispatch = useDispatch();
   const {current} = useSelector(state=>state.player)
   const updateCurrent = ()=>{
      dispatch(setCurrent(item))
   }
   return (
      <NavLink key={item.id} to="/" className={'bg-footer p-4 rounded hover:bg-activeColor group'}>
         <div className='pt-[100%] relative mb-4 w-[200px]'>
            <img src={item.img} className={classNames(
               { 'absolute w-full object-cover inset-0 h-full rounded flex-shrink-0': true },
               { 'rounded-full': item.type === "artist" },
               { 'rounded-lg': item.type === "podcast" },
            )} />
            <button 
            onClick={updateCurrent}
            className='w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2  items-center justify-center hidden group-hover:flex'>
               <Icon name={current?.id === item.id ? "player" : "pause"} size={16} />
            </button>
         </div>
         <h6 className='overflow-hidden overflow-ellipsis whitespaces-nowrap text-base font-semibold'>
            {item.title}
         </h6>
         <p className='line-clamp-2 text-sm text-link'>
            {item.description}
         </p>
      </NavLink>
   )
}

export default SongItem