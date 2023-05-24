import React, { useState } from 'react'
import { addAppointment } from '../../actions/appointments';
import {  useDispatch } from 'react-redux';


const AppointmentForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        date: "",
        location: "",
        provider_id: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAppointment(formData))
        setFormData({
            date: "",
            location: "",
            provider_id: ""
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <label>Date</label>
        <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
        />
        <label>Location</label>
        <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
        />
        <label>Provider</label>
        <input
            type="text"
            name="provider_id"
            value={formData.provider_id}
            onChange={handleChange}
        />
        <button>Submit</button>
    </form>
  )
}

export default AppointmentForm