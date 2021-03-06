import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllPeriodsPageComp = () => {
  const [periods, setPeriods] = useState([])
  const getPeriods = async () => {
    const resp = await axios.get(
      'https://reward-tracker-api.herokuapp.com/api/period'
    )
    setPeriods(resp.data)
  }

  const addNewPeriod = () => {
    return
  }

  useEffect(() => {
    getPeriods()
  }, [])

  return (
    <>
      <section>
        <h2>McGonagall's Moola - All Periods</h2>
        {periods.map((period, i) => {
          return (
            <button key={i} className="teacherPageButton">
              <Link to={`/period/${period.id}`}>
                Period {period.periodNumber} - {period.subject}
              </Link>
            </button>
          )
        })}
      </section>
      <section>
        <Link className="linkButton" to="/period/new">
          Add New Period +
        </Link>
      </section>
    </>
  )
}

export default AllPeriodsPageComp
