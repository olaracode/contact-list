import React, { useState } from "react";

//include images into your bundle
import Contact from "../component/Contact.jsx";
import ContactForm from "../component/ContactForm.jsx";
//create your first component
const Home = () => {
	// Contact list state
	const [contacts, setContacts] = useState([
		{ name: "John Doe", phone: "04141234567" },
	]);

	// Funcion para eliminar un contacto
	const handleDeleteContact = (id) => {
		let updatedContacts = contacts.filter((contact, index) => {
			return index !== id; //
		});
		setContacts(updatedContacts);
	};

	// Funcion para crear un nuevo contacto
	const handleAddContact = (e, name, phone) => {
		e.preventDefault(); // Evita que el navegador refresque al darle click en un boton submit
		if (name !== "" && phone !== 0) {
			// Un poco de validacion de datos
			setContacts([...contacts, { name, phone }]);
		}
	};
	return (
		<>
			<div className="container vh-100 d-flex justify-content-center align-items-center">
				<div className="card p-3 w-75">
					<h1 className="text-center">Lista de contactos</h1>
					<ContactForm handleAdd={handleAddContact} />

					{/* Contact List Start */}
					<div className="list-group">
						<div className="row">
							{contacts.map((contact, id) => {
								return (
									<Contact
										key={id}
										contact={contact}
										id={id}
										handleDelete={handleDeleteContact}
									/>
								);
							})}
						</div>
					</div>
					{/* Contact List End */}
				</div>
			</div>
		</>
	);
};

export default Home;
