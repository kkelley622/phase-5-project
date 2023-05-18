import React, { useState } from 'react'

const PrescriptionForm = () => {
    const [formData, setFormData] = useState({
        med: "",
        dose: "",
        frequency: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    

  return (
    <form>Add a Prescription:
        <br/>
        <label>Medication</label>
        <input 
            type="text"
            name="med"
            value={formData.med}
            onChange={handleChange}
        />
        <label>Dose</label>
        <input 
            type="text"
            name="dose"
            value={formData.dose}
            onChange={handleChange}
        />
        <label>Frequency</label>
        <input 
            type="text"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
        />
        <button>Add Prescription</button>
    </form>
  )
}

export default PrescriptionForm