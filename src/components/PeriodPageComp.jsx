import React from 'react'
import StudentComp from './StudentComp'

const PeriodPageComp = props => {
  return (
    <>
      <section>
        <h2>
          Period {props.periodNumber} - {props.subject}
        </h2>
        <StudentComp />
      </section>
    </>
  )
}

export default PeriodPageComp
