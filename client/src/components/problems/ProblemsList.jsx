import React from 'react'
import { useSelector } from 'react-redux'

const ProblemsList = () => {
  const problems = useSelector(store => store.problemsReducer)
  console.log("problems", problems)
  const problemsList = problems.map(prob => <li key={prob.id}>{prob.description} {prob.user.first_name}</li>)

  return (
    <div>{problemsList}</div>
  )
}

export default ProblemsList