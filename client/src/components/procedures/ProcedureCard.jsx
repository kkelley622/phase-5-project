import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProcedure } from '../../actions/procedures';
import moment from 'moment';

const ProcedureCard = ({ procedure }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProcedure(procedure.id))
  }

  return (
    <div className='card'>
      <h1>{procedure.description}</h1>
      <h2>{moment(procedure.date).format("MM/YYYY")}</h2>
      <button onClick={handleDelete}>Remove</button>
    </div>
  )
}

export default ProcedureCard