import React from 'react'

const PrescriptionCard = ({ prescription }) => {
  return (
    <>
        <figure>
            <h1>{prescription.medication.generic_name}/{prescription.medication.brand_name}</h1>
            <h2>{prescription.dose} {prescription.frequency}</h2>
            <button>No Longer Taking</button>
        </figure>
    </>
  )
}

export default PrescriptionCard