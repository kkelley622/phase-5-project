import React, { useState } from 'react'

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        date: "",
        location: "",
        provider: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

  return (
    <form> Add an Appointment:
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
            name="provider"
            value={formData.provider}
            onChange={handleChange}
        />
        <button>Submit</button>
    </form>
  )
}

export default AppointmentForm