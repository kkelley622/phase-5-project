import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_name: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefeault()
        fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate("/:username")
    }

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
        <label>Username</label>
        <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
        />
        <label>Password</label>
        <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
            type="text"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
        />
        <input type="submit" value="Signup" />
    </form>
  )
}

export default Signup