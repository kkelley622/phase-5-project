import React, { useEffect } from 'react'
import ProblemsLanding from '../problems/ProblemsLanding'
import PrescriptionsLanding from '../prescriptions/PrescriptionsLanding'
import AppointmentsLanding from '../appointments/AppointmentsLanding'
import ProceduresLanding from '../procedures/ProceduresLanding'
import { Provider, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProvidersLanding from '../providers/ProvidersLanding'

const Landing = ({ loading }) => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn && !loading) {
      navigate('/login')
    }
  }, [loggedIn, navigate, loading]);

  return (
    <div className='grid-container'>
      <AppointmentsLanding />
      <PrescriptionsLanding />
      <ProblemsLanding />
      <ProceduresLanding />
      <ProvidersLanding />
    </div>
  )
}

export default Landing