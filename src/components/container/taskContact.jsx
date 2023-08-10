import React from 'react';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/forms/contactR';

const TaskContactComponent = () => {
    const defaultContact = new Contact('Roxana', 'Rhenals', 'roxanarhenals65@gmail.com', true);
    return (
        <div>
            <div>
            <h1>User:</h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default TaskContactComponent;