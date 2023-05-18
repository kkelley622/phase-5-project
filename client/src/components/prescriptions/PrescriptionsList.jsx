import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PrescriptionCard from './PrescriptionCard'
import { useNavigate } from 'react-router-dom';

const PrescriptionsList = () => {
    const { loggedIn } = useSelector(store => store.usersReducer);
    const navigate = useNavigate();
    const prescriptions = useSelector(store => store.prescriptionsReducer);

    useEffect(() => {
      if(!loggedIn) {
        navigate('/login')
      }
    }, [loggedIn, navigate])

    const prescriptionsList = prescriptions?.map(prescription => <PrescriptionCard key={prescription.id} prescription={prescription}/>)

  return (
    <div>{prescriptionsList}</div>
  )
}

export default PrescriptionsList