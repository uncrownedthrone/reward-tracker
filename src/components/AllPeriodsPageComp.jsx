import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllPeriodsPageComp = () => {
  const [classrooms, setClassrooms] = useState([])
  const getClassrooms = async () => {
    const resp = await axios.get('https://localhost:5001/api/classroom')
    setClassrooms(resp.data)
  }

  useEffect(() => {
    getClassrooms()
  }, [])

  return (
    <>
      <section>
        <h2>McGonagall's Moola - All Periods</h2>
        {classrooms.map(classroom => {
          return (
            <button className="teacherPageButton">
              <Link to={`/classroom/${classroom.id}`}>
                Period {classroom.periodNumber} - {classroom.subject}
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
