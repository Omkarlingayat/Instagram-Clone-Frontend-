import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css";

const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post h-60 w-60'>
            <img className='cursor-pointer' src='./tiger.jpg' alt='post card'/>
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart><span>10</span>
                    </div>
                    <div>
                        <FaComment></FaComment>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard