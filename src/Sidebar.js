import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

  const recentItem = (topic) => (
      <div className='sidebar-recent-item'>
          <span className='sidebar-hash'>#</span>
          <p>{topic}</p>
      </div>
  );

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
        <div className='sidebar-stats'>
            <div className='sidebar-stat'>
                <p>Who viewed you</p>
                <p className='sidebar-stat-number'>8392</p>
            </div>
            <div className='sidebar-stat'>
                <p>Views on post</p>
                <p className='sidebar-stat-number'>3497</p>
            </div>
        </div>
        <div className='sidebar-bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
    </div>
  )
}

export default Sidebar