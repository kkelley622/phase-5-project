import React from 'react'
import { deleteProblem } from '../../actions/problems';
import { useDispatch } from 'react-redux'


const ProblemCard = ({ prob }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProblem(prob.id))
  }
  return (
    <>
        <figure>
            <h1>{prob.description}</h1>
            <h2>{prob.created_at}</h2>
            <button onClick={handleDelete}>Remove</button>
        </figure>
    </>
  )
}

export default ProblemCard