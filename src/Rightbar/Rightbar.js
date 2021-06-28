import React from 'react'
import './Rightbar.css'
import Contact from './Contact'
import AddIcon from '@material-ui/icons/Add';
function Rightbar() {
    return (
        <div className="rightbar">
            <h4>Sponsored</h4>
            <hr/>
            <Contact/>
            <hr/>
            <h4>Group Conversations</h4>
            <div className="rightbar__icon">
                <AddIcon/>
                <h5>Create New Group</h5>
            </div>
        </div>
    )
}

export default Rightbar
