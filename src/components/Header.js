import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';

function Header(){
  const user =useSelector(selectUser)
  const dispatch=useDispatch();

  const signOut=()=>{
    auth.signOut().then(()=>{
      dispatch(logout())
    })

  }


    return (
        <div className='header'>
            <div className='header__left'>
              <IconButton>
                <MenuIcon/>
              </IconButton>
               <img src="https://i.pinimg.com/564x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg"
                alt="" className='gmail__img'/>
            </div>

            <div className='header__middle'>
              <SearchIcon className='search__icon'/>
              <input placeholder='Search Mail' type='text'/>
              <ArrowDropDownIcon className='header__input--caret'/>
            </div>

            <div className='header__right'>
               <IconButton>
                <AppsIcon/>
               </IconButton>
               <IconButton>
                <NotificationsIcon/>
               </IconButton>
               <IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
               </IconButton>
            </div>

        </div>
    );
}

export default Header;
