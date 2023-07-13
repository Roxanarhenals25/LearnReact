import React, {useState} from 'react';

const Registerform = () => {

    const initialData = [
        {
            user: ' ',
            username: ' ',
            password: ' ',
            email: ' ',
        }
    ];
    
    const [data, setData] = useState(initialData);

    return (
        <div>
        </div>
    );
}

export default Registerform;