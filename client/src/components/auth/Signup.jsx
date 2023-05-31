import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../actions/users';
import { clearErrors } from '../../actions/errors';


const Signup = () => {
    const { loggedIn } = useSelector(store => store.usersReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        user_name: "",
        password: "",
        password_confirmation: "",
    });

    // useEffect(() => {
    //     if(loggedIn) {
    //         navigate('/')
    //     } else {
    //         dispatch(clearErrors())
    //     }
    // }, [loggedIn, navigate, dispatch])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signupUser(formData, navigate))
    };

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h1>Create an Account to Get Started</h1>
        <label>First Name</label>
        <br/>
        <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
        />
        <br/>
        <label>Last Name</label>
        <br/>
        <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
        />
        <br/>
        <label>Date of Birth</label>
        <br/>
        <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
        />
        <br/>
        <label>Username</label>
        <br/>
        <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
        />
        <br/>
        <label>Password</label>
        <br/>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        <br/>
        <label>Password Confirmation</label>
        <br/>
        <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
        />
        <br/>
        <br/>
        <button>Signup</button>
        <br/>
        <p>Or <Link to='/login'>Login</Link></p>
    </form>
  )
}

export default Signup