import React from 'react'
import ProblemsLanding from '../problems/ProblemsLanding'
import PrescriptionsLanding from '../prescriptions/PrescriptionsLanding'
import AppointmentsLanding from '../appointments/AppointmentsLanding'

const Landing = () => {
  return (
    <>
      <AppointmentsLanding />
      <PrescriptionsLanding />
      <ProblemsLanding />
    </>
  )
}

export default Landing