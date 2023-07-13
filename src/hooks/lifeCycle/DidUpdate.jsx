import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Cuando el componente recibe nuevas props o cambios en su estado o es actualizado');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Cuando el componente recibe nuevas props o cambios en su estado o es actualizado');
    });
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

