import React from 'react'
import ProblemsLanding from '../problems/ProblemsLanding'
import PrescriptionsLanding from '../prescriptions/PrescriptionsLanding'
import AppointmentsLanding from '../appointments/AppointmentsLanding'
import ProceduresLanding from '../procedures/ProceduresLanding'

const Landing = () => {
  return (
    <>
      <AppointmentsLanding />
      <PrescriptionsLanding />
      <ProblemsLanding />
      <ProceduresLanding />
    </>
  )
}

export default Landing