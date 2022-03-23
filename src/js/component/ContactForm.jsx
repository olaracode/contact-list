import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ handleAdd }) => {
	const [contactName, setContactName] = useState("");
	const [contactPhone, setContactPhone] = useState(0);

	return (
		<div className="mt-4 row">
			<div className="col-sm-12 col-lg-6">
				<label>Nombre</label>
				<input
					type="text"
					className="form-control"
					placeholder="John Doe"
					onChange={(e) => setContactName(e.target.value)}
				/>
			</div>
			<div className="col-sm-12 col-lg-6">
				<label>Numero</label>
				<input
					type="text"
					className="form-control"
					placeholder="0414333333"
					onChange={(e) => setContactPhone(e.target.value)}
				/>
			</div>
			<div className="col-sm-4 my-2">
				<button
					className="btn btn-primary"
					type="submit"
					onClick={(e) => handleAdd(e, contactName, contactPhone)}>
					Añadir
				</button>
			</div>
		</div>
	);
};

ContactForm.propTypes = {
	handleAdd: PropTypes.func,
};
export default ContactForm;
