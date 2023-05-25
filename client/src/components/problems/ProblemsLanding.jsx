import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProblemsLanding = () => {
    const problems = useSelector(store => store.problemsReducer);

    const limitedProblems = problems.slice(0,5).map(problem => <li key={problem.id}>{problem.description}</li>)
  return (
    <container>
        <h2>Some of My Problems</h2>
        <ul>{limitedProblems}</ul>
        <Link to="/:user_name/problems">All of My Problems</Link>
    </container>
  )
}

export default ProblemsLanding