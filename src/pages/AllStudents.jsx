import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllStudents = () => {
  const [student, setStudent] = useState([])

  const getStudents = async () => {
    const resp = await axios.get('https://localhost:5001/api/student')
    setStudent(resp.data)
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <>
      <section>
        {student.map(student => {
          return (
            <>
              <button>
                <Link to={`/student/${student.id}`}>
                  {student.name} - {student.house}
                </Link>
              </button>
            </>
          )
        })}
      </section>
    </>
  )
}

export default AllStudents
