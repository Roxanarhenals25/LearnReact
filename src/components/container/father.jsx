import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {
const [name, setName] = useState("Roxana");

function showMessage(text) {
    alert(`Menssage received: ${text}`);
}

function updateName(newName) {
    // const newName = 'New Name';
    setName(newName);
}

return (
    <div style={{ background: "tomato", padding: "10px" }}>
    <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
);
};

export default Father;
