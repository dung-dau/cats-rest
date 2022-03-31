import React from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import {useState, useEffect} from 'react';
import Post from './Post';
import { db } from './firebase';
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp,
         query,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const colRef = collection(db, 'posts');
  const q = query(colRef, orderBy("timestamp", "desc"))

  useEffect(() => {
    onSnapshot(q, (snapshot) => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  })

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      name: user.displayName,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    })
    setInput('')
  }

  return (
    <div className='feed'>
      <div className='feed-input-container'>
        <div className='feed-input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed-input-options'>
          <InputOption Icon={ImageIcon} title='Photo' color='#7085F9'/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({id, data: { name, message, photoUrl }}) => (
        <FlipMove>
          <Post 
            key={id}
            name={name}
            message={message}
            photoUrl={photoUrl}
          />
        </FlipMove>
      ))}
    </div>
  )
}

export default Feed