import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OneStudentComp from '../components/OneStudentComp'

const PeriodPage = props => {
  const [period, setPeriod] = useState({})
  const [student, setStudent] = useState({
    name: '',
    house: '',
    periodId: '',
  })
  const getPeriod = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Period/${props.match.params.id}`
    )
    setPeriod(resp.data)
  }

  const getStudents = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Period/AllStudentsJoin/${props.match.params.id}`
    )
    setStudent(resp.data)
    console.log(resp.data)
  }

  const updateStudentObject = e => {
    e.persist()
    setStudent(prevStudent => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }))
  }

  const submitStudent = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/student/', {
      ...student,
    })
    console.log(resp.data)
  }

  useEffect(() => {
    getPeriod()
    getStudents()
  }, [])

  return (
    <>
      <section>
        <h2>
          Period {period.periodNumber} - {period.subject}
        </h2>
        {/* {student.map(student => {
          return ( */}
        <OneStudentComp
          periodId={props.match.params.id}
          name={student.name}
          house={student.house}
        />
        {/* ) })} */}
      </section>
      <section>
        <h2>Add a Student?</h2>
        <form onSubmit={submitStudent}>
          <input
            type="text"
            placeholder="Full Name"
            value={student.name}
            name="name"
            onChange={updateStudentObject}
          />
          <input
            type="text"
            placeholder="House"
            value={student.house}
            name="house"
            onChange={updateStudentObject}
          />
          <input
            type="number"
            placeholder="Period #"
            value={student.periodId}
            name="periodId"
            onChange={updateStudentObject}
          />
          <button>Add Student</button>
        </form>
      </section>
    </>
  )
}

export default PeriodPage
