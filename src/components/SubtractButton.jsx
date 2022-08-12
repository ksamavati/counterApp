import React from 'react'

export const SubtractButton = ({ subtract }) => {
	return (
		<button className="btn btn-lg btn-outline-primary" onClick={subtract} id="subButton">-1</button>
	)
}
