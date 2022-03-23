import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import Widgets from './Widgets';

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
          <div className='app-body'>
            <div className="app-left">
              <Sidebar />
            </div>
            <div className="app-middle">
              <Feed />
            </div>
            <div className="app-right">
              <Widgets />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
