import React, { useState, useEffect } from 'react'
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
            <ul>
              <li>
                {student.name} - {student.house} - {student.id}
              </li>
            </ul>
          )
        })}
      </section>
    </>
  )
}

export default AllStudents
