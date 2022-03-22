import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({name, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post-header'>
            <Avatar />
            <div className='post-info'>
                <h2>{name}</h2>
            </div>
        </div>
        <div className='post-body'>
            <p>{message}</p>
        </div>

        <div className='post-buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon}
                         title="Like"
                         color='gray'
            />
            <InputOption Icon={ChatOutlinedIcon}
                         title="Comment"
                         color='gray'
            />
            <InputOption Icon={ShareOutlinedIcon}
                         title="Share"
                         color='gray'
            />
            <InputOption Icon={SendOutlinedIcon}
                         title="Send"
                         color='gray'
            />
        </div>
    </div>
  )
}

export default Post