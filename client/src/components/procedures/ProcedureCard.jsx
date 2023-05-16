import React from 'react'

const ProcedureCard = ({ procedure }) => {
  // const splitDate = () => {
  //   procedure.date.split("-");
  //   splitDate.push(splitDate.shift());
  //   console.log("new date", splitDate)
  // }

  return (
    <>
      <h1>{procedure.description}</h1>
      <h2>{procedure.date}</h2>
    </>
  )
}

export default ProcedureCard