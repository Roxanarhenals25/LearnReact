import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
const messageRef = useRef("");
const nameRef = useRef("");

function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in Input: ${text}`);
}

function pressButtonParams(text) {
    alert(`Text: ${text}`);
}

function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
}

return (
    <div style={{ background: "grey", padding: "30px" }}>
    <p onMouseOver={() => console.log("On mouse over")}> Hello, {name} </p>
    <button onClick={() => console.log("Pressed buttom 1")}> Button 1</button>
    <button onClick={pressButton}> Button 2 </button>
    <button onClick={() => pressButtonParams("Button 2 clicked")}>
        {" "}
        Boton 3{" "}
    </button>
    <input
        placeholder="send a text a your father"
        onFocus={() => console.log("Imput focused")}
        onChange={(e) => console.log("Input changed:", e.target.value)}
        onCopy={() => console.log("Copied text from input")}
        ref={messageRef}
    />
    <button onClick={() => send(messageRef.current.value)}>
        {" "}
        Send message{" "}
    </button>
    <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
        <input ref={nameRef} placeholder="New name" />
        <button type="Submit">Update name</button>
        </form>
    </div>
    </div>
);
};

export default Child;
