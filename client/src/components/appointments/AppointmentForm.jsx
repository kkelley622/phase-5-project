import React, { useState } from 'react'
import { addAppointment } from '../../actions/appointments';
import {  useDispatch, useSelector } from 'react-redux';

const AppointmentForm = () => {
    const providers = useSelector(store => store.providersReducer);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        location: "",
        provider_id: ""
    });
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAppointment(formData, date))
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
        <label htmlFor='provider_id'>Provider</label>
        <select 
            id="provider_id"
            name="provider_id"
            value={formData.provider_id}
            onChange={handleChange}
            defaultValue={"placeholder"}>
            <option value={"placeholder"}>Select a Provider</option>
            {providersList}
        </select>
        <label htmlFor='date'>Date</label>
        <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
        />
        <label htmlFor='time'>Time</label>
        <input 
            id='time'
            type='time'
            name='time'
            value={formData.time}
        />
        <label htmlFor='location'>Location</label>
        <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
        />
        {/* <Calendar id="date" name="date" value={date.toDateString()} onChange={handleDateChange} /> */}
        <button>Submit</button>
    </form>
  )
}

export default AppointmentForm