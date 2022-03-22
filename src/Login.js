import React, { useState } from 'react';
import './Login.css';
import logo from './linkedin-logo.png';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,
         updateProfile,
} from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
      }))
    }).catch(error => {
      alert(error)
    }) 
  }

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: profilePic,
      }).then(() => {
        dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
        }))
      })
    }).catch(error => alert(error))
  }

  return (
    <div className='login'>
      <img src={logo} alt="" />
      <form>
        <input value={name} onChange={e=>{setName(e.target.value)}} placeholder='Full name (required if registering)' type="text"/>
        <input value={profilePic} onChange={e=>{setProfilePic(e.target.value)}} placeholder='Profile pic URL(Optional)' type='text'/>
        <input value={email} onChange={e => {setEmail(e.target.value)}} placeholder='Email' type="email" />
        <input value={password} onChange={e=>{setPassword(e.target.value)}} placeholder='Password' type="password" />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?
        <span className='login-register' onClick={register}> Register Now</span>
      </p>
    </div>
  )
}

export default Login