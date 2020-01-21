import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OneStudentComp from '../components/OneStudentComp'

const PeriodPage = props => {
  const [period, setPeriod] = useState({})
  const [students, setStudents] = useState([])

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
    setStudents(resp.data)
    console.log(resp.data)
  }

  const updateStudentObject = e => {
    e.persist()
    setStudents(prevStudent => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }))
  }

  const submitStudent = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/student', {
      ...students,
      periodId: parseInt(students.periodId),
    })
    console.log(resp.data)
  }

  const reloadPage = () => {
    window.location.reload()
  }

  useEffect(() => {
    getPeriod()
    getStudents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section>
        <h2>
          Period {period.periodNumber} - {period.subject}
        </h2>
        {students.map(student => {
          return (
            <OneStudentComp
              periodId={props.match.params.id}
              student={student}
            />
          )
        })}
      </section>
      <section>
        <h2>Add a Student?</h2>
        <form onSubmit={submitStudent}>
          <input
            type="text"
            placeholder="Full Name"
            value={students.name}
            name="name"
            onChange={updateStudentObject}
          />
          <input
            type="text"
            placeholder="House"
            value={students.house}
            name="house"
            onChange={updateStudentObject}
          />
          <input
            type="number"
            placeholder="Period #"
            value={students.periodId}
            name="periodId"
            onChange={updateStudentObject}
          />
          <button onClick={reloadPage}>Add Student</button>
        </form>
      </section>
    </>
  )
}

export default PeriodPage
