import React, { useEffect, useState } from 'react'
import PeriodPageComp from '../components/PeriodPageComp'
import axios from 'axios'

const ClassroomPage = props => {
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
    <div>
      <PeriodPageComp
        periodNumber={period.periodNumber}
        subject={period.subject}
      />
    </div>
  )
}

export default ClassroomPage
