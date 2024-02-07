import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import styled from '@emotion/styled';

const StoryViewerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color:black;
`

const StoryImage = styled.img`
max-height:90vh;
object-fit:contain;
`

const StoryViewer = ({stories}) => {
    
    const [curentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextStory = () => {
        //---------------------- if one story finished then another story starts automatically --------------
        if(curentStoryIndex < stories.length-1){
            setCurrentStoryIndex(curentStoryIndex + 1);
            setActiveIndex(activeIndex + 1);
        }
        //--------------------- if last story finished then first story starts automatically ----------------
        else if(curentStoryIndex === stories.length -1){
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }

    //-------------------------------------- story time 2 seconds -------------------------
    useEffect(() => {
        const interval = setInterval(() => {handleNextStory()},2000)
        return () => clearInterval(interval);
    },[curentStoryIndex])

  return (
    <div className='relative w-full'>
        <div>
            <StoryViewerContainer>
                <StoryImage src={stories ?. [curentStoryIndex].image } />

                {/*--------------------------- line above story which will give information about how many stories are there and how much time it is taking ----- */}
                <div className='absolute top-0 flex w-full progressBar'>
                    {stories.map((item, index) => <ProgressBar key={index} duration={2000} index={index} activeIndex={activeIndex} /> )}
                </div>
            </StoryViewerContainer>
        </div>
    </div>
  )
}

export default StoryViewer;