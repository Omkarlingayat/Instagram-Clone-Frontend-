import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {
    const story = [
        { image: "./beach-1.jpg" },
        { image: "./beach-2.jpg" },
        { image: "./beach-3.jpg" },
        { image: "./beach-4.jpg" },
        { image: "./beach-5.jpg" }
    ]

  return (
    <div>
        <StoryViewer stories={story} />
    </div>
  )
}

export default Story