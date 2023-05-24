import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPrescription } from '../../actions/prescriptions';


const PrescriptionForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        medication_id: "",
        dose: "",
        frequency: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPrescription(formData))
        setFormData({
            medication_id: "",
            dose: "",
            frequency: ""
        })
    }
    

  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <label>Medication</label>
        <input 
            type="text"
            name="medication_id"
            value={formData.medication_id}
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