import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../../actions/users';


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

    useEffect(() => {
        if(loggedIn) {
            navigate('/')
        }
    }, [loggedIn, navigate])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signupUser(formData, navigate))
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
        />
        <label>Last Name</label>
        <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
        />
        <label>Date of Birth</label>
        <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
        />
        <label>Username</label>
        <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
        />
        <label>Password</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
        />
        <input type="submit" value="Signup" />
    </form>
  )
}

export default Signup