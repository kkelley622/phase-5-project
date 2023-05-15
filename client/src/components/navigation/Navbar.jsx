import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../actions/users';

const Navbar = () => {

  const { loggedIn } = useSelector(store => store.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    fetch("/logout", {method: 'DELETE'})
    dispatch(logoutUser);
  };

  const loggedInLinks = () => {
    return (
      <>
        <li><Link to="/:username">Home</Link></li>
        <li><Link to="/:user_name/appointments">Appointments</Link></li>
        <li><Link to="/:user_name/prescriptions">Prescriptions</Link></li>
        <li><Link to="/:user_name/problems">Problems</Link></li>
        <li><Link to="/:user_name/procedures">Procedures</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout</Link></li>
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