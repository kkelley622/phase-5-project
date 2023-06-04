import React from 'react'
import { useSelector } from 'react-redux'

const MedList = () => {
  
  const meds = useSelector(store => store.medsReducer)

  const medsList = meds.map(med => <li key={med.id}>{med.generic_name} ({med.brand_name})</li>)

  return (
    <ul>{ medsList }</ul>
  )
}

export default MedList