import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../../actions/appointments';

const AppointmentCard = ({ app }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAppointment(app.id))
  };

  return (
    <>
        <figure>
            <h1>{app.date}</h1>
            <h2>{app.location}</h2>
            <h2>{app.provider.last_name}, {app.provider.first_name}</h2>
            <h3>{app.provider.specialty}</h3>
            <button>Edit</button>
            <button onClick={handleDelete}>Canceled</button>
        </figure>
    </>
  )
}

export default AppointmentCard