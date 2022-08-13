import React from 'react'

//We're defining our add and subtract buttons as 'submit' buttons so they only work if
//the required text box field is filled out. This method 
const handleSubmit = (event) => {
	event.preventDefault();
}

export const CustomAddSub = ({ customAdd, customSubtract }) => {

	return (
		<div className="row d-flex justify-content-center">
			<form onSubmit={handleSubmit} className="input-group input-group-lg mb-3" style={{ "width": "240px" }}>
				<button className="btn btn-outline-danger" onClick={customSubtract} type="submit" id="customSubButton">-</button>
				<input type="text" className="form-control" placeholder="Custom" id="customBox" required />
				<button className="btn btn-outline-success" onClick={customAdd} type="submit" id="customAddButton">+</button>
			</form>
		</div>
	)
}
