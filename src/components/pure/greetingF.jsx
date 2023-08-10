import React, { useState } from "react";
import PropTypes from "prop-types";

function GreetingF(props) {
const [age, setage] = useState(23);
const birthday = () => {
    setage(age + 1);
};

return (
    <div>
    <h1>¡Hola, me llamo {props.name} y estoy en un componente funcional!</h1>
    <h2>Mi edad es de {age}</h2>
    <div>
        <button onClick={birthday}>Edad Aproximada</button>
    </div>
    </div>
);
}

GreetingF.propTypes = {
name: PropTypes.string,
};

export default GreetingF;
