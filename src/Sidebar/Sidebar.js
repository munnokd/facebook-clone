import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from '../StateProvider';

function Sidebar() {
    const [{user},dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalRoundedIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={GroupRoundedIcon} title="Freinds"/>
            <SidebarRow Icon={SupervisedUserCircleRoundedIcon} title="Groups"/>
            <SidebarRow Icon={StoreRoundedIcon} title="Marketplace"/>
            <SidebarRow Icon={OndemandVideoRoundedIcon} title="Watch"/>
            <SidebarRow Icon={EventAvailableRoundedIcon} title="Events"/>
            <SidebarRow Icon={HistoryRoundedIcon} title="Memories"/>
            <SidebarRow Icon={BookmarkRoundedIcon} title="Saved"/>
            <SidebarRow Icon={FlagRoundedIcon} title="Pages"/>
            <SidebarRow Icon={ExpandMoreRoundedIcon} title="See More"/>
        </div>
    )
}

export default Sidebar
