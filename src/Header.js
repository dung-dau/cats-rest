import React from 'react'
// imports the search icon
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        {/* Contains the linkedin logo and search bar */}
        <div className='header-left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' 
                 alt='' 
            />
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
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar='https://komarketing.com/images/2014/08/linkedin-default.png' title='Me' />
        </div>
    </div>
  )
}

export default Header