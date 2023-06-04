import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProceduresLanding = () => {
    const procedures = useSelector(store => store.proceduresReducer);

    const limitedProcedures = procedures.slice(0,5).map(procedure => <li key={procedure.id}>{procedure.description}</li>);

  return (
    <div className='grid-item'>
      <h1>Some of My Procedures</h1>
      <ul>{limitedProcedures}</ul>
      <Link to="/procedures">All of My Procedures</Link>
    </div>
  )
}

export default ProceduresLanding