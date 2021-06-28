import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import IconButton from '@material-ui/core/IconButton';


function Post({ image, username, timestamp, message, profilePic, likes, noComments, noShares }) {
    return (
        <div className="post">
            <div className="post__top">
                <div className="post__top__box">
                    <div className="post__top__avatar">
                        <IconButton>
                            <Avatar src={profilePic} />
                        </IconButton>
                        <div className="post__top__avatar__details">
                            <h3>{username}</h3>
                            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                        </div>
                    </div>
                    <MoreHorizRoundedIcon className="post__top__icon" />
                </div>
                <p>{message}</p>
            </div>
            <img className="post__image" src={image} alt={username} />
            <div className="post__bottom">
                <div className="post__bottom__likes">
                    {likes && <div className="post__bottom__likes__left">
                        <ThumbUpAltRoundedIcon className="post__bottom__likes__left1" />
                        <FavoriteRoundedIcon className="post__bottom__likes__left2" />
                        <p>{likes}</p>
                    </div>}
                    <div className="post__bottom__likes__right">
                        {noComments && <p>{noComments} Comments</p>}
                        {noShares && <p>{noShares} Shares</p>}
                    </div>
                </div>
                <hr />
                <div className="post__bottom__icons">
                    <div className="post__bottom__icons1">
                        <ThumbUpAltOutlinedIcon />
                        <p>Like</p>
                    </div>
                    <div className="post__bottom__icons1">
                        <ChatBubbleOutlineOutlinedIcon />
                        <p>Comments</p>
                    </div>

                    <div className="post__bottom__icons1">
                        <ShareRoundedIcon />
                        <p>Share</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post
