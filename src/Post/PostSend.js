import React, { useState } from 'react'
import './PostSend.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'; import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase'
import db from '../firebase'
import IconButton from '@material-ui/core/IconButton';

function PostSend() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const postSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
        setInput("");
        setImageUrl("");
    }

    return (
        <div className="postSend">
            <div className="postSend__up">
                <IconButton>
                    <Avatar src={user.photoURL} alt="" />
                </IconButton>
                <form>
                    <div className="postSend__up__input1">
                        <input value={input} onChange={e => setInput(e.target.value)} placeholder={`What's on your mind , ${user.displayName}`} type="text" />
                    </div>
                    <div className="postSend__up__input2">
                        <input value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)} placeholder="Image Adress" />
                    </div>
                    <button onClick={postSubmit} type="submit">Post</button>
                </form>
            </div>
            <hr />
            <div className="postSend__down">
                <div className="postSend__down__icon">
                    <VideocamIcon style={{ color: "rgb(218, 0, 0)" }} />
                    <p>Live Video</p>
                </div>
                <div className="postSend__down__icon">
                    <PhotoLibraryIcon style={{ color: "rgb(0, 214, 0)" }} />
                    <p>Photo/Video</p>
                </div>
                <div className="postSend__down__icon">
                    <MoodIcon style={{ color: "rgb(233, 233, 0)" }} />
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default PostSend
