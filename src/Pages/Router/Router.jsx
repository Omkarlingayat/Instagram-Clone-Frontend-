import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";

const Router = () => {
    return(
        <div>
            <div className="flex">
                <div className="w-[20%] border border-l-slate-500">
                   <Sidebar/>
                </div>
                <div className="w-full">
                    <Routes>
                        <Route path="/username" element={<Profile/>}></Route>
                        <Route path='/' element={<HomePage/>}></Route>

                        {/*------------------------ you will see story -------------------- */}
                        <Route path="/story" element={<Story></Story>} ></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router