import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StudentPageComp = () => {
  const [students, setStudent] = useState([])

  const getStudents = async () => {
    const resp = await axios.get('https://localhost:5001/api/Student')
    setStudent(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getStudents()
  }, [])

  return students.map(student => {
    return <p>{student.name}</p>
  })
}

export default StudentPageComp
