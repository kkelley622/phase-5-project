import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrescriptionCard from './PrescriptionCard'
import { useNavigate } from 'react-router-dom';
import PrescriptionForm from './PrescriptionForm';
import { clearErrors } from '../../actions/errors';

const PrescriptionsList = () => {
    const { loggedIn } = useSelector(store => store.usersReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const prescriptions = useSelector(store => store.prescriptionsReducer);

    useEffect(() => {
      if(!loggedIn) {
        navigate('/login')
      }
      return () => {
        dispatch(clearErrors())
      }
    }, [loggedIn, navigate, dispatch])

    const prescriptionsList = prescriptions.map(prescription => <PrescriptionCard key={prescription.id} prescription={prescription}/>)

  return (
    <>
      <h1>Add a New Prescription</h1>
      <div>{<PrescriptionForm />}</div>
      <h1>My Prescriptions</h1>
      <div>{prescriptionsList}</div>
    </>
  )
}

export default PrescriptionsList;