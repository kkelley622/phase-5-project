import React from 'react'
import { useSelector } from 'react-redux'
import ProblemCard from './ProblemCard'

const ProblemsList = () => {
  const problems = useSelector(store => store.problemsReducer)
  
  const problemsList = problems.map(prob => <ProblemCard key={prob.id} prob={prob}/>)

  return (
    <div>{problemsList}</div>
  )
}

export default ProblemsList