import React, { Component } from "react";
import PropTypes from "prop-types";

class lifeCycleExample extends Component {
constructor(props) {
    super(props);
    console.log("Constructor: Cuando se instancia el componente");
}

componentWillMount() {
    console.log("WillMount: Antes del montaje del componente");
}

componentDidMount() {
    console.log("DidMount: Montaje del componente antes de renderizarlo");
}

componentWillReceiveProps(nextProps) {
    console.log("WillReceiveProps: Por si va a recibi nuevas props del padre");
}

shouldComponentUpdate(nextProps, nextState) {}

componentWillUpdate(nextProps, nextState) {
    console.log("WillUpdate: Justo antes de actualizarse");
}

componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate: Actualizado");
}

componentWillUnmount() {
    console.log("WillUnmount: Cuando desaparece el componente");
}

render() {
    return <div></div>;
}
}

lifeCycleExample.propTypes = {};

export default lifeCycleExample;
