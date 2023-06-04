import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProblemCard from './ProblemCard'
import { useNavigate } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { clearErrors } from '../../actions/errors';

const ProblemsList = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const problems = useSelector(store => store.problemsReducer);

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
    return () => {
      dispatch(clearErrors())
    }
  }, [loggedIn, navigate])
  
  const problemsList = problems.map(prob => <ProblemCard key={prob.id} prob={prob}/>)

  return (
    <>
      <h1>Add a New Problem</h1>
      <div>{<ProblemForm />}</div>
      <h1>My Problems</h1>
      <div>{problemsList}</div>
    </>
  )
}

export default ProblemsList