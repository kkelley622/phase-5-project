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
    <form onSubmit={handleSubmit}>Add a Procedure:
        <br/>
        <label>Procedure</label>
        <input 
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />
        <label>Date</label>
        <input 
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button>Add Procedure</button>
    </form>
  )
}

export default ProcedureForm