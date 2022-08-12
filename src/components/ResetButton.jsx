import React from 'react'

export const ResetButton = ({ reset }) => {
  return (
    <button className="btn btn-lg btn-danger" onClick={reset} id="resetButton">Reset</button>
  )
}
