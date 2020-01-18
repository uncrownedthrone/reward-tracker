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

  return students.map((st, i) => {
    return (
      <p key={i}>
        {st.name} is in {st.house}
      </p>
    )
  })
}

export default StudentPageComp
