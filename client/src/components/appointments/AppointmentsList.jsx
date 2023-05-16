import React from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from './AppointmentCard';

const AppointmentsList = () => {
  const appointments = useSelector(store => store.appointmentsReducer);

  const appointmentsList = appointments.map(app => <AppointmentCard key={app.id} app={app}/>)

  return (
    <div>{appointmentsList}</div>
  )
}

export default AppointmentsList