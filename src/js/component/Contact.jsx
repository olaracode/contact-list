import React from "react";
import PropTypes from "prop-types";
const Contact = ({ contact, id, handleDelete }) => {
	return (
		<div className="list-group-item col-lg-6 col-sm-12 d-flex justify-content-between">
			<div>
				<p className="m-0">{contact.name}</p>
				<p className="m-0">{contact.phone}</p>
			</div>
			<button
				className="btn btn-outline-danger"
				onClick={() => handleDelete(id)}>
				X
			</button>
		</div>
	);
};

// Declaring PropType Validation
Contact.propTypes = {
	contact: PropTypes.object,
	id: PropTypes.number,
	handleDelete: PropTypes.func,
};

export default Contact;
