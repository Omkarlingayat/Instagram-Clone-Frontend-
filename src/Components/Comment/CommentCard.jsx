import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentCard = () => {
    const[isLike, setIsLike] = useState(false);
    const handleLike = () => {
        setIsLike(!isLike);
    }

  return (
    /*----------------------------- list of users who commented on that post --------------- */
    <div className='pb-4'>
        <div className='flex items-center justify-between'>
            {/*----------------------------- user profile photo, username, like, comment --------------- */}
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src='./girl-photo.webp' alt='comment-users-profile'/>
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>
                        <span className='ml-2'>nice post</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-1'>
                        <span>5 mins ago</span>
                        <span>20 likes</span>
                    </div>
                </div>
            </div>

            {/*------------- if another usrs wants to like comment which is written by different user --*/}
            <div className='cursor-pointer'>
                {isLike ? (<AiFillHeart className='hover:opacity-50 cursor-pointer text-red-600' onClick={handleLike}/>) : 
                (<AiOutlineHeart className='hover:opacity-50 cursor-pointer' onClick={handleLike}/>)}
            </div>
        </div>
    </div>
  )
}

export default CommentCard