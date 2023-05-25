import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const PrescriptionsLanding = () => {
    const prescriptions = useSelector(store => store.prescriptionsReducer);

    const limitedPrescriptions = prescriptions.slice(0,5).map(prescription => <li key={prescription.id}>{prescription.medication.generic_name} {prescription.dose}</li>)

  return (
    <container>
        <h2>Some of My Prescriptions</h2>
        <ul>{limitedPrescriptions}</ul>
        <Link to="/prescriptions">All of My Prescriptions</Link>
    </container>
  )
}

export default PrescriptionsLanding