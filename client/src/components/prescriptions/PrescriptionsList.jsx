import React from 'react'
import { useSelector } from 'react-redux'
import PrescriptionCard from './PrescriptionCard'

const PrescriptionsList = () => {
    const prescriptions = useSelector(store => store.prescriptionsReducer)

    const prescriptionsList = prescriptions?.map(prescription => <PrescriptionCard key={prescription.id} prescription={prescription}/>)

  return (
    <div>{prescriptionsList}</div>
  )
}

export default PrescriptionsList