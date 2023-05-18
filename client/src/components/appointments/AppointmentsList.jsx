import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from './AppointmentCard';
import { useNavigate } from 'react-router-dom';

const AppointmentsList = () => {
  const appointments = useSelector(store => store.appointmentsReducer);
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate]);
  
  const appointmentsList = appointments.map(app => <AppointmentCard key={app.id} app={app}/>)


  return (
    <div>{appointmentsList}</div>
  )
}

export default AppointmentsList