import React, { useState } from 'react'
import { addAppointment } from '../../actions/appointments';
import {  useDispatch, useSelector } from 'react-redux';


const AppointmentForm = () => {
    const providers = useSelector(store => store.providersReducer);
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
    };

    const providersList = providers.map(provider => <option key={provider.id} value={provider.id}>{provider.last_name}, {provider.first_name}</option>)

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
        <label htmlFor='provider_id'>Provider</label>
        <select 
            id="provider_id"
            name="provider_id"
            value={formData.provider_id}
            onChange={handleChange}>
            {providersList}
        </select>
        {/* <input
            type="text"
            name="provider_id"
            value={formData.provider_id}
            onChange={handleChange}
        /> */}
        <button>Submit</button>
    </form>
  )
}

export default AppointmentForm