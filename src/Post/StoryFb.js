import React from 'react'
import './StoryFb.css'
import { Avatar } from '@material-ui/core'

function StoryFb({src,img,title}) {
    return (
        <div style={{backgroundImage:`url(${img})`}}  className="story">
            <Avatar className="storyFb__avatar" src={src}/>
            <h4>{title}</h4>
        </div>
    )
}

export default StoryFb
