import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

const ProceduresLanding = () => {
    const procedures = useSelector(store => store.proceduresReducer);

    const limitedProcedures = procedures.slice(0,5).map(procedure => <li key={procedure.id}>{procedure.description}</li>)
  return (
    <container>
        <h2>Some of My Procedures</h2>
        <ul>{limitedProcedures}</ul>
        <Link to="/:user_name/procedures">All of My Procedures</Link>
    </container>
  )
}

export default ProceduresLanding