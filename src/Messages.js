import './Messages.css';

import React from 'react';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { db } from './firebase';
import { collection, getDocs, getDoc } from 'firebase/firestore';

function Messages() {
  const colRef = collection(db, 'messages/dudau0924222@gmail.com/contacts')
  const docRef = getDocs(colRef);

  return (
    <div className='messages'>
        <div className='messages-left'>
            <div className='messages-left-header'>
                <h2 className='messages-text'>Messages</h2>
                <CreateIcon />
            </div>
            <div className='messages-left-users'>
                {getDocs(colRef).then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        <h1>doc.data().name</h1>
                    })
                })}
            </div>
        </div>
        <div className='messages-right'>Right</div>
    </div>
  )
}

export default Messages