import React from 'react'
import { useSelector } from 'react-redux'

const PrescriptionsList = () => {
    const prescriptions = useSelector(store => store.prescriptionsReducer)

    const prescriptionsList = prescriptions?.map(prescription => <li key={prescription.id}>{prescription.medication.generic_name} ({prescription.medication.brand_name}) {prescription.dose} {prescription.frequency}</li>)

  return (
    <div>{prescriptionsList}</div>
  )
}

export default PrescriptionsList