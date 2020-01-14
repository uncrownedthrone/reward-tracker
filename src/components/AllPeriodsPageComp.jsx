import React from 'react'
import { Link } from 'react-router-dom'

const AllPeriodsPageComp = () => {
  return (
    <>
      <section>
        <h2>McGonagall's Moola - All Periods</h2>
        <button className="teacherPageButton">
          <Link to="/period">Period 1 - Transfiguration 1</Link>
        </button>
      </section>
      <section>
        <button className="teacherPageButton">
          <Link to="/newperiod">Add New Period +</Link>
        </button>
      </section>
    </>
  )
}

export default AllPeriodsPageComp
