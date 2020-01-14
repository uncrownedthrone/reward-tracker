import React from 'react'

const NewClassroomPageComp = () => {
  return (
    <>
      <section className="newClassCompSection">
        <h2>Create a New Classroom</h2>
        <p>What period?</p>
        <input type="number" placeholder="Period Number" />
        <p>What is the subject?</p>
        <input type="text" placeholder="Class Subject" />
        <p>Please choose students below to add to your classroom:</p>
        <p>STUDENT 1</p>
        <p>STUDENT 2</p>
        <button>Create Classroom</button>
      </section>
    </>
  )
}

export default NewClassroomPageComp
