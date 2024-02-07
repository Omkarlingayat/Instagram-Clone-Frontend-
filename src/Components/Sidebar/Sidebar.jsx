import React, { useState } from "react";
import "./Sidebar.css";
import { IoReorderThree } from "react-icons/io5";
import { mainu } from "../SidebarConfig";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../Post/CreatePostModal";
import SearchComponet from "../SearchComponents/SearchComponet";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navitate = useNavigate();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const hanldeTablClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navitate("/username");
    } else if (title === "Home") {
      navitate("/");
    }
    else if(title === "Create"){
      onOpen();
    }

    if(title === "Search"){
      setIsSearchVisible(true);
    }
    else{
      setIsSearchVisible(false);
    }
  };

  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div className={`flex flex-col justify-between h-full ${activeTab === "Search" ? "px-2" : "px-10"}`} >
        {<div>
          {activeTab !== "Search" && <div className="">
            <img className="image" src="/insta logo.png" />
          </div>}
          <div className="">
            {mainu.map((item) => (
              <div
                onClick={() => hanldeTablClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                
                {activeTab !== "Search" && <p
                  className={`${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  }`}
                >
                  {item.title}
                </p>}
              </div>
            ))}
          </div>
        </div>}
        <div className="flex items-center cursor-pointer text-2xl pb-2">
          <IoReorderThree />
          {activeTab !== "Search" && <p className="ml-5">More</p> }
        </div>
      </div>

      {/*-------------------------------------- create --------------------------------- */}
      <div>
        <CreatePostModal onClose={onClose} isOpen={isOpen} />
      </div>

      {/*-------------------------------------- Search --------------------------------- */}
      <div>
        {isSearchVisible && <SearchComponet/>}
      </div>

    </div>
  );
};

export default Sidebar;
