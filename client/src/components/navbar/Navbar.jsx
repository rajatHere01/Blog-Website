import React, { useRef } from 'react'
import classes from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const handlelogout = () => {
    localStorage.removeItem('persist:root');
    document.cookie = 'path=/;';
    window.location.reload();
    
    navigate('/login');
  }
  const user = useSelector(state => state.auth.user);
  console.log(user.username);

  const [showOptions, setShowOptions] = useState(false);


  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>BlogZooo</Link>
        </div>
        <ul className={classes.center}>
          <li><Link to='/' className={classes.listItem}>Home</Link></li>
          <li><Link to='/create' className={classes.listItem}>Create</Link></li>
          
        </ul>
        <div className={classes.right}>
          <FaUserCircle size={32} color="white"/>
          <Link to='/' className={classes.username} onClick={handleToggleOptions}>{user.username}</Link>
          {showOptions &&          
            <div className={classes.modal}>
              <Link to='/login' onClick={handlelogout}>Logout</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar