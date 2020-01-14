import React from 'react'

const StudentComp = () => {
  const test = () => {
    window.location.reload(false)
  }

  return (
    <>
      <section onClick={test} className="studentComp">
        student name | student total
      </section>
    </>
  )
}

export default StudentComp
