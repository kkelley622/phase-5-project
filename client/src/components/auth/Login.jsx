import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../actions/users';
// import { clearErrors } from '../../actions/errors';

const Login = () => {    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(store => store.usersReducer);
    // const errors = useSelector(store => store.errorsReducer);

    // const errorsList = errors.map(error => <li key={error.id}>{error}</li>)

    const [formData, setFormData] = useState({
        user_name: "",
        password: "",
    });

    useEffect(() => {
        if(loggedIn) {
            navigate('/')
        } 
    }, [loggedIn, navigate, dispatch])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(formData, navigate))
    };

  return (
    <form className="login" onSubmit={handleSubmit}>
        <h1>Welcome to <span>MyHealth</span></h1>
        <h3>Login to Continue</h3>
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
        {/* {errorsList} */}
        <br/>
        <button>Login</button>
        <p>Don't Have an Account? <Link to='/signup'>Signup</Link> Here</p>
    </form>
  )
}

export default Login