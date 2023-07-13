import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea renderizado o añadido al DOM');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHooks = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea renderizado o añadido al DOM');
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}

