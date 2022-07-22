import React from 'react';
import { Button, IconButton } from '@mui/material';
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from "react-redux"
import { openSendMessage } from '../features/counter/mailSlice';

function Sidebar() {
    const dispatch= useDispatch();
    return (
        <div className='sidebar'>
            <Button 
            className='sidebar__compose' 
            startIcon={<AddIcon  fontSize="large" />}
            onClick={()=>dispatch(openSendMessage())}>Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54} selected={false}/>
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={54} selected={false}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={54} selected={false}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={54} selected={false}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} selected={false}/>

            <div className='sidebar__footer'>
                <div className='sidebar__footer--icons'>
                  <IconButton>
                    <PersonIcon/>
                  </IconButton>
                  <IconButton>
                    <DuoIcon/>
                  </IconButton>
                  <IconButton>
                    <PhoneIcon/>
                  </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
