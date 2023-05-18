import React from 'react'

const AppointmentForm = () => {
  return (
    <form> Add an Appointment:
        <br/>
        <label>Date</label>
        <input
            type="text"
            name="date"
            value="2023-12-25"
        />
    </form>
  )
}

export default AppointmentForm