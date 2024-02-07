import React, { useState } from 'react';
import "./PostCard.css";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isPostSaved, setIsPostSaved] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }

    const handleSavePost = () => {
        setIsPostSaved(!isPostSaved);
    }

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleOpenCommentModal = () =>{
        onOpen();
    }

  return (
    /* ---------------------- posts on home page ----------------------- */
    <div className='ml-20 mr-20'>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5'>

                {/* ---------------------- posts username and location on home page ----------------------- */}
                <div className='flex items-ceter'>
                    <img className='h-12 w-12 rounded-full' src='./cat.jpg' alt='cat-photo'/>
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>username</p>
                        <p className='font-thin text-sm'>location</p>
                    </div>
                </div>

                {/* ---------------------- posts delete button on home page ----------------------- */}
                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick}/>
                    <div className='dropdown-content'>
                        {showDropDown && <p className='bg-black text-white py-1 px-8 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>  
            </div>

            {/* ---------------------- posts photo on home page ----------------------- */}
            <div className='w-full'>
                <img className='w-fulll' src='cat-post.jpg' alt='post-photo'/>
            </div>  

            {/* ---------------------- posts like,comment,share,save on home page ----------------------- */}
            <div className='flex justify-between items-center w-full px-5 py-4'>
                
                <div className='flex item-center space-x-2'>
                    {isPostLiked ? (<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike}/>) :
                     (<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>)}
                    
                    <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>

                <div className='cursor-pointer'>
                    {isPostSaved ? (<BsBookmarkFill className='aia-label="save" text-xl cursor-pointer hover:opacity-50 text-color-black' onClick={handleSavePost}/>) : 
                    (<BsBookmark className='aia-label="remove" text-xl cursor-pointer hover:opacity-50' onClick={handleSavePost}/>)}
                </div>
            </div>

            {/* ---------------------- posts :- count like, view like, add comment  ----------------------- */}
            <div className='w-full py-2 px-5'>
                <p>50 likes</p>
                <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
            </div>    
                
            <div className='w-fulll'>
                <div className='flex w-full items-center px-5'>
                    <BsEmojiSmile/>
                    <input className='commentInput' type='text' placeholder='Add a comment...'/>
                </div>
            </div>        
        </div>

        {/*----------------------------------- comment modal -------------------------------------------- */}
        <CommentModal  handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isPostSaved={isPostSaved} />
    </div>
  )
}

export default PostCard;