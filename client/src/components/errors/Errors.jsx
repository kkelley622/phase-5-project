import React from 'react'
import { useSelector } from 'react-redux'

const Errors = () => {
  const errors = useSelector(store => store.errorsReducer);
  console.log(errors)

  const errorsList = errors.map(error => <li key={error.id}>{error}</li>)
  
  return (
    <div>{errorsList}</div>
  )
}

export default Errors