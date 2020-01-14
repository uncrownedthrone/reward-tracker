import React from 'react'

const StudentComp = () => {
  return (
    <>
      <div class="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label for="collapsible" className="lbl-toggle">
          Harry Potter
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <p>test 2</p>
            <p>test 3</p>
            <input type="text" placeholder="test4" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentComp
