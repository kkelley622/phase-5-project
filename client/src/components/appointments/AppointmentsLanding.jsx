import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';

const AppointmentsLanding = () => {
    const appointments = useSelector(store => store.appointmentsReducer);

    const limitedAppointments = appointments.slice(0,5).map(appt => <li key={appt.id}>{moment(appt.date).utcOffset(0).format('MM/DD/YYYY')} with {appt.provider.first_name} {appt.provider.last_name}</li>);
    
  return (
    <div className='grid-item'>
      <h1>Some of My Appointments</h1>
      <ul>{limitedAppointments}</ul>
      <Link to="/appointments">All of My Appointments</Link>
    </div>
  )
}

export default AppointmentsLanding