import React from 'react'
import { Link } from 'react-router-dom'

const TeacherPage = () => {
  return (
    <>
      <section>
        <h2>McGonagall's Moola - All Periods</h2>
        <button className="teacherPageButton">
          <Link to="/classrooms">Transfiguration 1</Link>
        </button>
      </section>
      <section>
        <button className="teacherPageButton">
          <Link to="/newclassroom">Add New Period +</Link>
        </button>
      </section>
    </>
  )
}

export default TeacherPage
