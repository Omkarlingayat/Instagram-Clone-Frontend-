import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import CommentCard from './CommentCard';
import "./CommentModal.css";

const CommentModal = ({onClose,isOpen}) => {
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isPostSaved, setIsPostSaved] = useState(false);

    const handleSavePost = () => {
        setIsPostSaved(!isPostSaved);
    }

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

  return (
    <div>
        <Modal size={"5xl"} onClose={onClose} isOpen={isOpen} isCentered> 
            <ModalOverlay /> 
            <ModalContent> 
                <ModalBody>
                    <div className='flex h-[80vh]'>
                        {/*------------------------- post image -------------------------------- */}
                        <div className='w-[45%] flex flex-col justify-center'>
                            <img className='max-h-full w-full' src='./cat-post.jpg' alt='comment-photo'/>
                        </div>

                        {/*------------------------- post users image and username -------------------------------- */}
                        <div className='w-[55%] pl-10'>
                            <div className='flex justify-between items-center py-5'>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-9 h-9 rounded-full' src='./cat.jpg' alt='user-profile-photo'/>
                                    </div>
                                    <div className='ml-2'>
                                        <p>username</p>
                                    </div>
                                </div>

                                <BsThreeDots/>
                            </div>
                            {/*---------------------- adding comment card ------------------- */}
                             <hr />
                             <div className='pt-3 comment'>
                                {[1,1,1,1,1,1].map(()=><CommentCard/>)}
                             </div>

                             {/*----------------------- like,share,comment------------------ */}
                             <div className='mt-35 pt-3'>
                                <hr/>
                                <div className='flex justify-between items-center w-full mt-2'>
                                    <div className='flex item-center space-x-2'>
                                        {isPostLiked ? (<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike}/>) :
                                        (<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>)}
                                        
                                        <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                                    </div>

                                    <div className='cursor-pointer'>
                                        {isPostSaved ? (<BsBookmarkFill className='aia-label="save" text-xl cursor-pointer hover:opacity-50 text-color-black' onClick={handleSavePost}/>) : 
                                        (<BsBookmark className='aia-label="remove" text-xl cursor-pointer hover:opacity-50' onClick={handleSavePost}/>)}
                                    </div>
                                </div>
                                <div className='w-full py-1'>
                                    <p>50 likes</p>
                                    <p className='opacity-50 py-1 cursor-pointer'>view all 10 comments</p>
                                </div>
                                <div className='w-fulll'>
                                    <div className='flex w-full items-center'>
                                        <BsEmojiSmile/>
                                        <input className='commentInput' type='text' placeholder='Add a comment...'/>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </ModalBody> 
            </ModalContent>        
            </Modal>
    </div>
  )
}

export default CommentModal