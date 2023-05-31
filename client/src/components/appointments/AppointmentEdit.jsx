import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editAppointment } from '../../actions/appointments';

const AppointmentEdit = () => {
    const { loggedIn } = useSelector(store => store.usersReducer);
    const appointments = useSelector(store => store.appointmentsReducer);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        provider_id: "",
        date: "",
        time: "",
        location: ""
    });

    const app = appointments.find(app => app.id === parseInt(id, 10));

    useEffect(() => {
        if(!loggedIn) {
            navigate('/login')
        } if(appointments.length > 0) {
            console.log(app)
            setFormData({
                date: app.date,
                time: app.datetime,
                location: app.location
            })
        }
    }, [loggedIn, navigate, appointments, id, app]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editAppointment(id, formData, navigate))
    }

  return (
    <>
        <h1>{`Edit Your Appointment with ${app.provider.first_name} ${app.provider.last_name}`}</h1>
        <form onSubmit={handleSubmit}>
            <label>Date</label>
            <input 
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
            <label>Time</label>
            <input 
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
            <label>Location</label>
            <input 
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    </>
  )
}

export default AppointmentEdit