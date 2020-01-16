import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllPeriodsPageComp = () => {
  const [periods, setPeriods] = useState([])
  const getPeriods = async () => {
    const resp = await axios.get('https://localhost:5001/api/period')
    setPeriods(resp.data)
  }

  useEffect(() => {
    getPeriods()
  }, [])

  return (
    <>
      <section>
        <h2>McGonagall's Moola - All Periods</h2>
        {periods.map(period => {
          return (
            <button className="teacherPageButton">
              <Link to={`/period/${period.id}`}>
                Period {period.periodNumber} - {period.subject}
              </Link>
            </button>
          )
        })}
      </section>
      <section>
        <button className="teacherPageButton">
          <Link to="/period/new">Add New Period +</Link>
        </button>
      </section>
    </>
  )
}

export default AllPeriodsPageComp
