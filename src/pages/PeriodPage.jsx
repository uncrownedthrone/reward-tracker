import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PeriodPageComp from '../components/PeriodPageComp'

const PeriodPage = props => {
  const [period, setPeriod] = useState({})

  const getPeriod = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Period/${props.match.params.id}`
    )
    setPeriod(resp.data)
  }

  useEffect(() => {
    getPeriod()
  }, [])

  return (
    <>
      <PeriodPageComp
        periodNumber={period.periodNumber}
        subject={period.subject}
      />
    </>
  )
}

export default PeriodPage
