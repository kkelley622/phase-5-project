import React, { useEffect } from 'react'
import ProblemsLanding from '../problems/ProblemsLanding'
import PrescriptionsLanding from '../prescriptions/PrescriptionsLanding'
import AppointmentsLanding from '../appointments/AppointmentsLanding'
import ProceduresLanding from '../procedures/ProceduresLanding'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate]);

  return (
    <div className='grid-container'>
      <AppointmentsLanding />
      <PrescriptionsLanding />
      <ProblemsLanding />
      <ProceduresLanding />
    </div>
  )
}

export default Landing