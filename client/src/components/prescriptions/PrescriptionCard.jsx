import React from 'react'
import { deletePrescription } from '../../actions/prescriptions'
import { useDispatch } from 'react-redux'


const PrescriptionCard = ({ prescription }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePrescription(prescription.id))
  }

  return (
    <div className='card'>
      <h2>{prescription.medication.generic_name}/{prescription.medication.brand_name}</h2>
      <h3>{prescription.dose} {prescription.frequency}</h3>
      <button onClick={handleDelete}>No Longer Taking</button>
    </div>
  )
}

export default PrescriptionCard