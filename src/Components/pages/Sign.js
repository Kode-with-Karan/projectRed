import React from 'react'
import { useState } from 'react';
import './Sign.css'
import GoogleLogo from '../images/googleLogo.png'
import { getDatabase, push, set, ref } from 'firebase/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCircleUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ChatApp from './ChatApp';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Sign() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState(false);
  const [showpw, setshowpw] = useState(false);
  const navigate = useNavigate()
  // const history = useHistory()

  const db = getDatabase();
  const usersListRef = ref(db, 'users');

  const isChecked = (e) => {
    setshowpw(e.target.checked)
  }


  const sendUsers = () => {
    const newPostRef = push(usersListRef);
    set(newPostRef, {
      username: username, password: password
    })
  }



  const submit = (e) => {
    
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter username or password');
    } else {
      sendUsers();
      // console.log(username)
      // navigate("/", { username: 'Brent' }) 
      // <ChatApp username={username} />
    }
  }

  if (!email) {
    return (
      <div className="loginform">
        <div className='loginEmail'>
          <div className="logo">
            <img src={GoogleLogo} alt="Google" />
          </div>
          <h3>Sign in</h3>
          <h5>Use your Google Account</h5>
          <form>
            <input type="email" name="email" id="email" placeholder='Email or phone' onChange={(e) => setusername(e.target.value)} />
          </form>
          <a href="#">Forgot email?</a>
          <p>Not your computer? Use Guest mode to sign in privately. <a href="#">Learn more</a></p>
          <div className="submit">
            <a href="#">Create account</a>
            <button onClick={e => { setemail(true); console.log(email) }}>Next</button>
          </div>
        </div>
        <div className="options">
          <div className="language">
            <p>English (United State)</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="terms">
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="loginform">
        <div className='loginPass'>
          <div className="logo">
            <img src={GoogleLogo} alt="Google" />
          </div>
          <h3>Welcome</h3>
          <h5>
            <FontAwesomeIcon icon={faCircleUser} />
            <p>{username}</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </h5>
          <p>To continue, first verify that it's you</p>
          <form >
            <input type={showpw ? "text" : "password"} name="password" id="password" placeholder='Enter your password' onChange={(e) => setpassword(e.target.value)} />

            <input type="checkbox" onChange={e => isChecked(e)} id="showpw" />
            <label htmlFor="showpw"> Show password</label>

            <div className="submit">
              <a href="#">Forgot password?</a>
              <button onClick={e=>{submit(e)}} type="submit">
              <NavLink to={"/"+username} className="passSubmit">Next</NavLink>
                </button>
            </div>
          </form>
        </div>
        <div className="options">
          <div className="language">
            <p>English (United State)</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="terms">
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sign