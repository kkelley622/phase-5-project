import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProcedure } from '../../actions/procedures';

const ProcedureCard = ({ procedure }) => {
  const dispatch = useDispatch();
  // const splitDate = () => {
  //   procedure.date.split("-");
  //   splitDate.push(splitDate.shift());
  //   console.log("new date", splitDate)
  // }

  const handleDelete = () => {
    dispatch(deleteProcedure(procedure.id))
  }

  return (
    <>
      <h1>{procedure.description}</h1>
      <h2>{procedure.date}</h2>
      <button onClick={handleDelete}>Remove</button>
    </>
  )
}

export default ProcedureCard