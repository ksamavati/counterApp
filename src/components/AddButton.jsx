import React from 'react'

export const AddButton = ({ add }) => {
	return (
		<button className="btn btn-lg btn-outline-primary" onClick={add} id="addButton">+1</button>
	)
}
