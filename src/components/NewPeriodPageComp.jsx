import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const NewPeriodPageComp = () => {
  const [teachers, setTeachers] = useState([])
  const [teacherId, setTeacherId] = useState()
  const [period, setPeriod] = useState({
    periodNumber: '',
    subject: '',
  })
  const [periodId, setPeriodId] = useState()
  const [
    wasPeriodCreatedSuccessfully,
    setWasPeriodCreatedSuccessfully,
  ] = useState(false)

  const updatePeriodObject = e => {
    e.persist()
    setPeriod(prevPeriod => {
      return {
        ...prevPeriod,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitPeriod = async e => {
    e.preventDefault()
    const isValid = Object.keys(period).reduce((acc, key) => {
      return acc && period[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post(
        'https://reward-tracker-api.herokuapp.com/api/period',
        {
          ...period,
          periodNumber: parseInt(period.periodNumber),
          teacherId: parseInt(teacherId),
        }
      )
      if (resp.status === 201) {
        setPeriodId(resp.data.id)
      }
    }
  }

  const getTeachers = async () => {
    const resp = await axios.get(
      `https://reward-tracker-api.herokuapp.com/api/teacher`
    )
    setTeachers(resp.data)
  }

  useEffect(() => {
    getTeachers()
    if (periodId) {
      setWasPeriodCreatedSuccessfully(true)
    }
  }, [periodId])

  return wasPeriodCreatedSuccessfully ? (
    <Redirect to={`/period/${periodId}`} />
  ) : (
    <>
      <section className="newClassCompSection">
        <form onSubmit={submitPeriod}>
          <h2>Create a New Period</h2>
          <select onChange={e => setTeacherId(e.target.value)}>
            <option value="">Select Teacher</option>
            {teachers.map(teacher => {
              return (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              )
            })}
          </select>
          <p>What's the period number?</p>
          <input
            placeholder="Period Number"
            type="number"
            value={period.periodNumber}
            name="periodNumber"
            onChange={updatePeriodObject}
          />
          <p>What's the subject?</p>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={period.subject}
            onChange={updatePeriodObject}
          />
          <button>Create Period</button>
        </form>
      </section>
    </>
  )
}

export default NewPeriodPageComp
