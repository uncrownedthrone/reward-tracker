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
            <button className="collapseButton">
              <i class="fas fa-arrow-circle-up"></i> 1
            </button>
            <button className="collapseButton">ADD 3</button>
            <button className="collapseButton">ADD 5</button>
            <button className="collapseButton">REDEEM 1</button>
            <button className="collapseButton">REDEEM 3</button>
            <button className="collapseButton">REDEEM 5</button>
            <input
              className="collapseText"
              type="text"
              placeholder="ADD/REDEEM Reason"
            />
            <button className="collapseButton">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentComp
