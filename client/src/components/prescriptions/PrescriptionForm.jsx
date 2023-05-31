import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPrescription } from '../../actions/prescriptions';


const PrescriptionForm = () => {
    const medications = useSelector(store => store.medsReducer)
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
    };

    const medicationsList = medications.length > 0 ? 
        medications.map(medication => <option key={medication.id} value={medication.id}>{medication.generic_name}/{medication.brand_name}</option>)
        : "Loading";

  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <label htmlFor='medication_id'>Medication</label>
        <select 
            id="medication_id" 
            name="medication_id" 
            value={formData.medication_id} 
            onChange={handleChange} 
            // defaultValue={"placeholder"}
            >
        <option value={"placeholder"}>Select a Medication</option>{medicationsList}</select>
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