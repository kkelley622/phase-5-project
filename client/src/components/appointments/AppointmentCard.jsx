import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../../actions/appointments';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment-timezone'

const AppointmentCard = ({ app }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteAppointment(app.id))
  };

  return (
    <div className='card'>
      <h2>{moment(app.date).utcOffset(0).format('MMMM Do YYYY')} {moment(app.time).utcOffset(0).format('hh:mm a')}</h2>
      <h2>{app.location}</h2>
      <h2>With {app.provider.first_name} {app.provider.last_name}</h2>
      <h3>{app.provider.specialty}</h3>
      <button onClick={() => navigate(`/appointments/${app.id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Canceled</button>
    </div>
  )
}

export default AppointmentCard