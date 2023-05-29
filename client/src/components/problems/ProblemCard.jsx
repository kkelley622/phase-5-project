import React from 'react'
import { deleteProblem } from '../../actions/problems';
import { useDispatch } from 'react-redux'


const ProblemCard = ({ prob }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProblem(prob.id))
  }
  return (
    <div className='card'>
        <h1>{prob.description}</h1>
        <button onClick={handleDelete}>Remove</button>
    </div>
  )
}

export default ProblemCard