import React, { useState } from 'react'
import { addAppointment } from '../../actions/appointments';
import {  useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';


const AppointmentForm = () => {
    const providers = useSelector(store => store.providersReducer);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
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
        {/* <label htmlFor='date'>Date</label>
        <input
            id="date"
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
        /> */}
        <label htmlFor='location'>Location</label>
        <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
        />
        <Calendar id="date" name="date" value={date.toDateString()} onChange={handleDateChange} />
        <button>Submit</button>
    </form>
  )
}

export default AppointmentForm