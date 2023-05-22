import React, { useState } from 'react';
import { addProblem } from '../../actions/problems'
import { useDispatch } from 'react-redux';

const ProblemForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    description: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProblem(formData))
  }

  return (
    <form onSubmit={handleSubmit}>Add a New Problem or Diagnosis:
        <br/>
        <label>Problem/Diagnosis</label>
        <input 
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />
        <button>Add Problem</button>
    </form>
  )
}

export default ProblemForm