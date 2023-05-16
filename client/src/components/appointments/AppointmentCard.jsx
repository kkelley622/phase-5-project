import React from 'react'

const AppointmentCard = ({ app }) => {
  return (
    <>
        <figure>
            <h1>{app.date}</h1>
            <h2>{app.location}</h2>
            <h2>{app.provider.last_name}, {app.provider.first_name}</h2>
            <h3>{app.provider.specialty}</h3>
            <button>Edit</button>
        </figure>
    </>
  )
}

export default AppointmentCard