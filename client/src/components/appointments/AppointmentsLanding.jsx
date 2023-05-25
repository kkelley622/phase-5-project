import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const AppointmentsLanding = () => {
    const appointments = useSelector(store => store.appointmentsReducer);

    const limitedAppointments = appointments.slice(0,5).map(appt => <li key={appt.id}>{appt.date} {appt.provider.last_name}</li>)
  return (
    <container>
        <h2>Some of My Appointments</h2>
        {limitedAppointments}
        <Link to="/:user_name/appointments">All of My Appointments</Link>
    </container>
  )
}

export default AppointmentsLanding