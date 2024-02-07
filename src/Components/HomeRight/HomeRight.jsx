import React from 'react';
import "./HomeRight.css";
import HomeRightCard from './HomeRightCard';

const HomeRight = () => {
  return (
    <div className='border'>
      <div className=''>
          {/*------------------------------- user information --------------------------- */}
          <div className="flex justify-between items-center w-full py-4 px-5">
            <div className="flex items-ceter justify-between">
              <img className="h-12 w-12 rounded-full" src="./profile-photo.jfif" alt="profile-photo"/>
              <div className="pl-2">
                <p className="font-semibold text-sm">username</p>
                <p className="font-thin text-sm">Full Name</p>
              </div>
              <p className='switch cursor-pointer hover:opacity-50'>Switch</p>
            </div>
        </div>

          {/*------------------------------- suggestions --------------------------- */}
          <div className='pt-4'>
            <p className='font-thin text-sm px-4 pb-2'>Suggested for you</p>
            <div className=''>
                {[1,1,1].map((item) => <HomeRightCard/>)}
            </div>
          </div>        
      </div>
    </div>
  );
}

export default HomeRight