import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppointmentCard from './AppointmentCard';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import { clearErrors } from '../../actions/errors';

const AppointmentsList = () => {
  const appointments = useSelector(store => store.appointmentsReducer);
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
    return () => {
      dispatch(clearErrors())
    }
  }, [loggedIn, navigate]);
  
  const appointmentsList = appointments.map(app => <AppointmentCard key={app.id} app={app}/>);


  return (
    <>
      <h1>Add a New Appointment</h1>
      <div>{<AppointmentForm />}</div>
      <h1>My Appointments</h1>
      <div>{appointmentsList}</div>
    </>
  )
}

export default AppointmentsList