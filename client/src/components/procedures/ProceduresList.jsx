import React from 'react'
import { useSelector } from 'react-redux'
import ProcedureCard from './ProcedureCard'

const ProceduresList = () => {
  const procedures = useSelector(store => store.proceduresReducer);
  
  const proceduresList = procedures.map(procedure => <ProcedureCard key={procedure.id} procedure={procedure}/>)

  return (
    <div>{proceduresList}</div>
  )
}

export default ProceduresList