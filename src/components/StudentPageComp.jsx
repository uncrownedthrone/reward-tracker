import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StudentPageComp = () => {
  const [students, setStudent] = useState([])

  const getStudents = async () => {
    const resp = await axios.get('https://localhost:5001/api/Student')
    setStudent(resp.data)
  }

  useEffect(() => {
    getStudents()
  }, [])

  return students.map((student, i) => {
    return (
      <p key={i}>
        {student.name} - {student.house}
      </p>
    )
  })
}

export default StudentPageComp
