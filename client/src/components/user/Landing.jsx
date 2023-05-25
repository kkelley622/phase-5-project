import React, { useEffect } from 'react'
import ProblemsLanding from '../problems/ProblemsLanding'
import PrescriptionsLanding from '../prescriptions/PrescriptionsLanding'
import AppointmentsLanding from '../appointments/AppointmentsLanding'
import ProceduresLanding from '../procedures/ProceduresLanding'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadAppointments } from '../../actions/appointments'
import { loadPrescriptions } from '../../actions/prescriptions'
import { loadProblems } from '../../actions/problems'
import { loadProcedures } from '../../actions/procedures'

const Landing = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    } else {
      // dispatch(loadAppointments());
      // dispatch(loadPrescriptions());
      // dispatch(loadProblems());
      // dispatch(loadProcedures());
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <AppointmentsLanding />
      <PrescriptionsLanding />
      <ProblemsLanding />
      <ProceduresLanding />
    </>
  )
}

export default Landing