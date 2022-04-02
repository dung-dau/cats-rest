import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { Routes, Route } from 'react-router-dom';
import Notifications from './Notifications';
import Messages from './Messages';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))

      } else {
        dispatch(logout());
      }

    })
  }, [dispatch])

  return (
    <div className="app">
      {!user ? <Login /> :(
        <div className="app-wrapper">
          <Header />
          <Routes>
            <Route path='/' element={<Feed />}/>
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/messages' element={<Messages />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
