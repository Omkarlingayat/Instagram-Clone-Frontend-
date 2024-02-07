import React from 'react';
import "./HomeRight.css";

const HomeRightCard = () => {
  return (
    <div>
        {/*------------------------------- user information --------------------------- */}
        <div className="flex justify-between items-center w-full py-4 px-5">
            <div className="flex items-ceter justify-between">
              <img className="h-12 w-12 rounded-full" src="./srk.webp" alt="profile-photo"/>
              <div className="pl-2">
                <p className="font-semibold text-sm">username</p>
                <p className="font-thin text-sm">Follows you</p>
              </div>
              <p className='follow cursor-pointer hover:opacity-50'>Follow</p>
            </div>
        </div>
    </div>
  )
}

export default HomeRightCard;