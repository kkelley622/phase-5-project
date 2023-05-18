import React, { useState } from 'react'

const ProblemForm = () => {
    const [description, setDescription] = useState();

  return (
    <form>Add a New Problem or Diagnosis:
        <br/>
        <label>Problem/Diagnosis</label>
        <input 
            type="text"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button>Add Problem</button>
    </form>
  )
}

export default ProblemForm