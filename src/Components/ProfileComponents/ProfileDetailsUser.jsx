import React from 'react';
import {TbCircleDashed} from "react-icons/tb";

const ProfileDetailsUser = () => {
  return (
    <div className='py-10 w-full'>
        <div className='flex items-center'> 
            <div className='w-[15]'>
                <img className='h-32 w-32 rounded-full' src='./profile-photo.jfif' alt='profile-photo'/>
            </div>
            
            <div className='space-y-5'>
              <div className='flex space-x-10 items-center'>
                <p className='ml-20'>username</p>
                <button>Edit Profile</button>
                <TbCircleDashed></TbCircleDashed>
              </div>
              
              <div className='flex space-x-10 items-center'>
                <div>
                  <span className='font-semibold mr-2 ml-20'>5</span>
                  <span>posts</span>
                </div>
                <div>
                  <span className='font-semibold mr-2'>50</span>
                  <span>followers</span>
                </div>
                <div>
                  <span className='font-semibold mr-2'>100</span>
                  <span>following</span>
                </div>
              </div>

              <div className='ml-20'>
                <p className='font-semibold'>Full Name</p>
                <p className='font-thin text-sm mt-5'>
                    🔥 OffiCiaL AcCouNT ✌
                    SeLF BliEvEr 😇
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetailsUser