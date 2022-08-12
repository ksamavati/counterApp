import React from 'react'

export const CustomAddSub = ({ customAdd, customSubtract }) => {
	return (
		<div className="row d-flex justify-content-center">
			<div className="input-group input-group-lg mb-3" style={{ "width": "240px" }}>
				<button className="btn btn-outline-danger" onClick={customSubtract} type="button" id="customSubButton">-</button>
				<input type="text" className="form-control" placeholder="Custom" id="customBox" />
				<button className="btn btn-outline-success" onClick={customAdd} type="button" id="customAddButton">+</button>
			</div>
		</div>
	)
}
