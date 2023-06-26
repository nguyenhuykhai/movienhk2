// import { logDOM } from '@testing-library/react'
import React, { useState, useLayoutEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";

export default function Nativation() {

  // LOGIN WITH GOOGLE
  const [user, setUser] = useState({});
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
    console.log(decoded);
    setUser(decoded);
    document.getElementById("buttonDiv").hidden = true;
  };
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById("buttonDiv").hidden = false;
  };
  useEffect(() => {
    /* global google*/
      google.accounts.id.initialize({
        client_id: "766192683093-aijpda08duh9nkkcp6q3pehvpbg3nj91.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  , []);
// END LOGIN WITH GOOGLE

  const [scroll, setScroll] = useState(false)
  const header = document.getElementById("header");
  useLayoutEffect(() => {
    const scrollElement = () => {
      setScroll(window.scrollY > 0)
    }
    window.addEventListener('scroll', scrollElement)
  }, [scroll])

  return (
    <div className={(`header ${scroll ? 'shadow' : ''}`)} id='header'>
      <Link to='/' className='logo'>
        <i className='bx bxs-movie' ></i>
        <p>MOVIE-NHK</p>
      </Link>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
        <li><div id="buttonDiv"></div></li>
        {Object.keys(user).length != 0 && (
          <button onClick={handleLogOut}>logout</button>
        )}
        {user && (
          <div>
            <h5>{user.name}</h5>
          </div>
        )}
      </ul>
    </div>
  )
}
