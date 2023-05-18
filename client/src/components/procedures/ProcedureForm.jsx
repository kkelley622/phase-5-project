import React, { useState } from 'react'

const ProcedureForm = () => {
    const [description, setDescription] = useState();

  return (
    <form>Add a Procedure:
        <br/>
        <label>Procedure</label>
        <input 
            type="text"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button>Add Procedure</button>
    </form>
  )
}

export default ProcedureForm