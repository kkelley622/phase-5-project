import React, { useState } from 'react'
import { addAppointment } from '../../actions/appointments';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';


const AppointmentForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        date: "",
        location: "",
        provider_id: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAppointment(formData, navigate))
    }

  return (
    <form onSubmit={handleSubmit}> Add an Appointment:
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