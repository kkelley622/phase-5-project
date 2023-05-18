import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProcedureCard from './ProcedureCard'
import { useNavigate } from 'react-router-dom';
import ProcedureForm from './ProcedureForm';

const ProceduresList = () => {
  const { loggedIn} = useSelector(store => store.usersReducer);
  const procedures = useSelector(store => store.proceduresReducer);
  const navigate= useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate])
  
  const proceduresList = procedures?.map(procedure => <ProcedureCard key={procedure.id} procedure={procedure}/>)

  return (
    <>
      <div>{<ProcedureForm />}</div>
      <div>{proceduresList}</div>
    
    </>
  )
}

export default ProceduresList