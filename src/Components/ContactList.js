import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import ContactCard from "./ContactCard";

const ContactList = () => {
	const dispatch = useDispatch();
	const listContacts = useSelector(
		(state) => state.contactReducer.listContacts
	);
	const load = useSelector((state) => state.contactReducer.load);
	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);

	return (
		<div>
			{load ? (
				<h2>Loadinggg ...</h2>
			) : (
				listContacts.map((el) => <ContactCard contact={el} key={el._id} />)
			)}
		</div>
	);
};

export default ContactList;
