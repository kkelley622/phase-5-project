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
      <h2>{prob.description}</h2>
      <button onClick={handleDelete}>Remove</button>
    </div>
  )
}

export default ProblemCard