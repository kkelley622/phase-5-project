import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProcedureCard from './ProcedureCard'
import { useNavigate } from 'react-router-dom';
import ProcedureForm from './ProcedureForm';
import { clearErrors } from '../../actions/errors';

const ProceduresList = ({ loading }) => {
  const { loggedIn} = useSelector(store => store.usersReducer);
  const procedures = useSelector(store => store.proceduresReducer);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {
    if(!loggedIn && !loading) {
      navigate('/login')
    } 
    return () => {
      dispatch(clearErrors())
    }
  }, [loggedIn, navigate, dispatch, loading])
  
  const proceduresList = procedures.map(procedure => <ProcedureCard key={procedure.id} procedure={procedure}/>)

  return (
    <>
      <h1>Add a New Procedure</h1>
      <div>{<ProcedureForm />}</div>
      <h1>My Procedures</h1>
      <div>{proceduresList}</div>
    </>
  )
}

export default ProceduresList