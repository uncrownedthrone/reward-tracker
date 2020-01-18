import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StudentPageComp = () => {
  // const [period, setPeriod] = useState({})
  const [student, setStudent] = useState([])

  const getStudent = async () => {
    const resp = await axios.get('https://localhost:5001/api/Student/')
    setStudent(resp.data)
    console.log(resp.data)
  }

  // const getPeriod = async () => {
  //   const resp = await axios.get('https://localhost:5001/api/Period/')
  //   setPeriod(resp.data.id)
  // }

  useEffect(() => {
    getStudent()
    // getPeriod()
  }, [])

  return student.map((st, i) => {
    return (
      <>
        {/* <h2>
          Period {period.periodNumber} - {period.subject}
        </h2> */}
        <p key={i}>
          {st.name} is in {st.house}
        </p>
      </>
    )
  })
}

export default StudentPageComp
