import classNames from 'classnames';
import CustomRange from 'components/CustomRange';
import { Icon } from 'icons/icon'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAudio } from 'react-use';
import { setControls } from 'stores/playerSlice';
import { secondsToTime } from 'utils/utils';
const Player = () => {
   const dispatch = useDispatch();
   const {current} = useSelector(state=>state.player)
   // const [values, setValues] = useState([50]);
   const [audio, state, controls, ref] = useAudio({
      src: current?.src,
   });
   useEffect(()=>{
      controls.play()
   },[current])
   useEffect(()=>{
      dispatch(setControls(controls.play))
   },[])
   const volumeIcon = useMemo(() => {
      if (state.volume === 0 || state.muted) {
         return 'volumeMute'
      }
      if (state.volume > 0 && state.volume < 0.33) {
         return 'volumeLow'
      }
      if (state.volume >= 0.33 && state.volume < 0.66) {
         return 'volumeNormal'
      }
      return "volumeFull"
   }, [state.volume, state.muted])
   return (
      <div className='flex px-4 justify-between items-center  h-full'>
         <div className='min-w-[11.25rem] w-[30%] '>
            {/* {JSON.stringify(state)} */}
         </div>
         <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
            <div className='flex items-center gap-x-2'>
               <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="shuffle" /></button>
               <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="leftPlayer" /></button>
               <button onClick={controls[state?.playing ? 'pause' : 'play']} className='w-8 h-8 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]'><Icon size={16} name={state?.playing ? "player" : "pause"} /></button>
               <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="rightPlayer" /></button>
               <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="repeatPlayer" /></button>
            </div>
            <div className='w-full flex items-center gap-x-2'>
               {audio}
               <div className='text-[0.688rem] text-white text-opacity-70'>
                  {secondsToTime(state?.time)}
               </div>
               <CustomRange
                  step={0.1}
                  min={0}
                  max={state?.duration || 1}
                  value={state?.time}
                  onChange={value => controls.seek(value)}
               />
               <div className='text-[0.688rem] text-white text-opacity-70'>
                  {secondsToTime(state?.duration)}
               </div>
            </div>
         </div>
         <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end '>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="lyrics" /></button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="queuePlayer" /></button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="devicesPlayer" /></button>
            <button onClick={controls[state.muted ? 'unmute' : "mute"]} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name={volumeIcon} /></button>
            <div className='w-[5.813rem] max-w-full'>
               <CustomRange
                  step={0.01}
                  min={0}
                  max={1}
                  value={state.muted ? 0 : state?.volume}
                  onChange={value =>
                     {controls.unmute()
                     controls.volume(value)}
                  }
               />
            </div>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text opacity-100'><Icon size={16} name="fullScrin" /></button>

         </div>
      </div>
   )
}

export default Player