import React from 'react'
import { useSelector } from 'react-redux'

const AppointmentsList = () => {

  const appointments = useSelector(store => store.appointmentsReducer);
  console.log("apppointments", appointments)

  const appointmentsList = appointments.map(app => <li key={app.id}>{app.user.first_name} {app.location}</li>)

  return (
    <div>{appointmentsList}</div>
  )
}

export default AppointmentsList