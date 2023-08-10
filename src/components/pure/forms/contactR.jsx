import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact";

const ContactComponent = ({ contact }) => {
return (
    <div>
    <h3>Name: {contact.name}</h3>
    <h3>Lastname: {contact.lastname}</h3>
    <h3>Email: {contact.email}</h3>
    <h3>This user is: {contact.connected ? "CONNECTED" : "DISCONNECTED"}</h3>
    </div>
);
};

ContactComponent.propTypes = {
contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
