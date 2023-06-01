import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const PrescriptionsLanding = () => {
    const prescriptions = useSelector(store => store.prescriptionsReducer);

    const limitedPrescriptions = prescriptions.slice(0,5).map(prescription => <li key={prescription.id}>{prescription.medication.generic_name} {prescription.dose}</li>);
  return (
    <div className='grid-item'>
      <h1>Some of My Prescriptions</h1>
      <ul>{limitedPrescriptions}</ul>
      <Link to="/prescriptions">All of My Prescriptions</Link>
    </div>
  )
}

export default PrescriptionsLanding