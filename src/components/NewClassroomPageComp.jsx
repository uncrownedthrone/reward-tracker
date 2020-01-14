import React from 'react'

const NewClassroomPageComp = () => {
  return (
    <>
      <section className="newClassCompSection">
        <h2>Create a New Period</h2>
        <p>What's the period number?</p>
        <input type="number" placeholder="Period Number" />
        <p>What's the subject?</p>
        <input type="text" placeholder="Subject" />
        <p>Please choose students below to add to this period:</p>
        <p>STUDENT 1</p>
        <p>STUDENT 2</p>
        <button>Create Period</button>
      </section>
    </>
  )
}

export default NewClassroomPageComp
