import React from 'react'
import { deletePrescription } from '../../actions/prescriptions'
import { useDispatch } from 'react-redux'


const PrescriptionCard = ({ prescription }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePrescription(prescription.id))
  }

  return (
    <>
        <figure>
            <h1>{prescription.medication.generic_name}/{prescription.medication.brand_name}</h1>
            <h2>{prescription.dose} {prescription.frequency}</h2>
            <button onClick={handleDelete}>No Longer Taking</button>
        </figure>
    </>
  )
}

export default PrescriptionCard