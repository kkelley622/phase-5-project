import React from 'react'

const ProblemCard = ({ prob }) => {
  return (
    <>
        <figure>
            <h1>{prob.description}</h1>
            <h2>{prob.created_at}</h2>
            <button>Remove</button>
        </figure>
    </>
  )
}

export default ProblemCard