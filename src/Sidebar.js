import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            {/* the gradient background */}
            <img src='https://img.freepik.com/free-vector/smooth-mesh-blurred-background-multi-color-gradient
                      -pattern-smooth-modern-watercolor-style-backdrop_124894-147.jpg?size=626&ext=jpg' alt=''
            />
            {/* renders a generic image when no props are passed in */}
            <Avatar className='sidebar-avatar'/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
    </div>
  )
}

export default Sidebar