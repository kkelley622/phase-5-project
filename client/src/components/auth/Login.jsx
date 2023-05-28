import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../actions/users';

const Login = () => {    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(store => store.usersReducer)

    const [formData, setFormData] = useState({
        user_name: "",
        password: "",
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
        dispatch(loginUser(formData, navigate))
    };

  return (
    <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
    </form>
  )
}

export default Login