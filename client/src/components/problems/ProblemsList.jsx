import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProblemCard from './ProblemCard'
import { useNavigate } from 'react-router-dom';

const ProblemsList = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();
  const problems = useSelector(store => store.problemsReducer);

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate])
  
  const problemsList = problems?.map(prob => <ProblemCard key={prob.id} prob={prob}/>)

  return (
    <div>{problemsList}</div>
  )
}

export default ProblemsList