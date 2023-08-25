import { Icon } from 'icons/icon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
   const navigate = useNavigate();

   const handleGoBack = () => {
      console.log(navigate);
      navigate(-1);
   };

   const handleGoForward = () => {
      navigate(1); // Bir sonraki sayfaya git
   };

   return (
      <nav className='flex items-center gap-x-3'>
         <button onClick={handleGoBack} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon name="left" size={22} />
         </button>
         <button onClick={handleGoForward} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon name="right" size={22} />
         </button>
      </nav>
   );
};

export default Navigation;
