import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProblemsLanding = () => {
    const problems = useSelector(store => store.problemsReducer);
    console.log(problems)

    const limitedProblems = problems.slice(0,5).map(problem => <li key={problem.id}>{problem.description}</li>)

    return (
    <div className='grid-item'>
        <h1>Some of My Problems</h1>
        <ul>{limitedProblems}</ul>
        <Link to="/problems">All of My Problems</Link>
    </div>
  )
}

export default ProblemsLanding