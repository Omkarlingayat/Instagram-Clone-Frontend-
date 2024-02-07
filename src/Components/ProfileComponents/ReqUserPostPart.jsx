import React, { useState } from 'react';
import { AiOutlineTable} from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { PiUserSquareBold } from "react-icons/pi";
import ReqUserPostCard from './ReqUserPostCard';

const ReqUserPostPart = () => {
  const[activeTab, setActiveTab] = useState();

  const tabs=[
    {
        tab:"POSTS",
        icon:<AiOutlineTable></AiOutlineTable>,
        activeTab:""
    },
    {
        tab:"REELS",
        icon:<RiVideoAddLine></RiVideoAddLine>,
        activeTab:""
    },
    {
        tab:"SAVED",
        icon:<BiBookmark></BiBookmark>
    },
    {
        tab:"TAGGED",
        icon:<PiUserSquareBold></PiUserSquareBold>
    }
  ]

    return (
    <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item)=> <div onClick={()=>setActiveTab(item.tab)} 
            className={`${activeTab===item.tab?"border-t border-black":"opacity-60"} flex items-center cursor-pointer py-2 test-sm`}>
                <p>{item.icon}</p>
                <p className='ml-1'>{item.tab}</p>
                </div>)}
        </div>
        <div>
            <div className="flex flex-wrap">
                {[1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
            </div>
        </div>
    </div>
  );
};

export default ReqUserPostPart;