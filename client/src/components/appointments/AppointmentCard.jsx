import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../../actions/appointments';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const AppointmentCard = ({ app }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteAppointment(app.id))
  };

  return (
    <>
        <figure>
            <h1>{moment(app.date).format('MM/DD/YYYY')}</h1>
            <h2>{app.location}</h2>
            <h2>{app.provider.last_name}, {app.provider.first_name}</h2>
            <h3>{app.provider.specialty}</h3>
            <button onClick={() => navigate(`/appointments/${app.id}/edit`)}>Edit</button>
            <button onClick={handleDelete}>Canceled</button>
        </figure>
    </>
  )
}

export default AppointmentCard