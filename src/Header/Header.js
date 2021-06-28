import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import { Avatar } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{user},dispatch]=useStateValue();

    return (
        <div className="header">
            <div className="header__left">
            <IconButton>
                <img  className="header__left__img" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
                </IconButton>
                <div className="header__left__search">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__mid">
                <div className="header__icon
                header__icon--current">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <OndemandVideoIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <ViewQuiltIcon fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                <IconButton>
                    <Avatar src={user.photoURL} alt=""/>
                    </IconButton>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddRoundedIcon/>
                </IconButton>
                <IconButton>
                    <QuestionAnswerIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ArrowDropDownRoundedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
