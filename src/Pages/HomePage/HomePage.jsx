import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
import "./HomePage.css";

const HomePage = () =>{

    return(
        <div>
            <div className="mt-10 flex w-[100%] justify-center">
                <div className="w-[60%] px-10">
                    
                    {/*--------------------------- Story ------------------------------------------- */}
                    <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full overflow-hidden story" >
                        {[1,1,1,1,1,1,1,1].map((item)=><StoryCircle/>)}
                    </div>
                    
                    {/*--------------------------- Posts ------------------------------------------- */}
                    <div className="space-y-10 w-full mt-10 mb-10">
                        {[1,1,1,1].map((item)=><PostCard/>)}
                    </div>
                </div>

                {/*--------------------------- Home page right part ----------------------------------------- */}
                <div className="w-[35%] h-full">
                    <HomeRight/>
                </div>
            </div>
            
        </div>
    );
}

export default HomePage;