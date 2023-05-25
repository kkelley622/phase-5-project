import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../actions/users';

const Navbar = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(store => store.usersReducer);

  const handleClick = () => {
    fetch('/logout', {method: 'DELETE'})
    dispatch(logoutUser())
    navigate('/login')
  };

  const loggedInLinks = () => {
    return (
      <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/providers">Providers</Link></li>
        <li><Link to="/prescriptions">Prescriptions</Link></li>
        <li><Link to="/problems">Problems</Link></li>
        <li><Link to="/procedures">Procedures</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout </Link>{currentUser.user_name}</li>
      </>
    )
  };

  const loggedOutLinks = () => {
    return (
      <>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </>
    )
  };

  return (
    <ul>{ loggedIn ? loggedInLinks() : loggedOutLinks() }</ul>
  )
}

export default Navbar