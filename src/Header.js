import React from 'react'
// imports the search icon
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import logo from './cat-logo.jpg';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
        {/* Contains the logo and search bar */}
        <div className='header-left'>
            <img src={logo} 
                 alt='' 
            />
        </div>
        <div className="header-middle">
          <div className='header-search'>
                {/* Icons are rendered like react components */}
                <SearchIcon />
                {/* The text part of the search bar */}
                <input type='text' placeholder='Search'/>
            </div>
        </div>
        <div className='header-right'>
            {/* Icon and title are passed in properties for the component */}
            {/* Allows for the creation of variations of the same component without repeating code */}
            <HeaderOption Icon={HomeIcon} title='Home' onClick={() => navigate('/')}/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications' onClick={() => navigate('/notifications')}/>
            <HeaderOption Icon={MessageIcon} title='Messages' onClick={() => navigate('/messages')}/>
            <HeaderOption
                          Icon={PowerSettingsNewIcon}
                          title='Logout'
                          onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header