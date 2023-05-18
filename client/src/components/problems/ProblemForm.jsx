import React, { useState } from 'react'

const ProblemForm = () => {
    const [problem, setProblem] = useState();

  return (
    <form>Add a New Problem or Diagnosis:
        <br/>
        <label>Problem/Diagnosis</label>
        <input 
            type="text"
            name="problem"
            value={problem}
            onChange={e => setProblem(e.target.value)}
        />
    </form>
  )
}

export default ProblemForm