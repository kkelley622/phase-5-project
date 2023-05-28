import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProcedure } from '../../actions/procedures';


const ProcedureForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    description: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProcedure(formData))
    setFormData({
      description: "",
      date: ""
    })
  };

  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <label htmlFor='description'>Procedure</label>
        <input 
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />
        <label htmlFor='date'>Date</label>
        <input 
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button>Add Procedure</button>
    </form>
  )
}

export default ProcedureForm