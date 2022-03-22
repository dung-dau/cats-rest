import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='header-option'>
        {/* Essentially an if statement that renders the Icon component if the property was passed in */}
        {Icon && <Icon className='header-option-icon'/>}

        {/* Does not work atm */}
        {avatar && <Avatar className='header-option-icon' alt=''>{user?.email[0]}</Avatar>}
        
        {/* Puts the text in an h3 tag for the passed in title property */}
        <h3 className='header-option-title'>{title}</h3>
    </div>
  );
}

export default HeaderOption