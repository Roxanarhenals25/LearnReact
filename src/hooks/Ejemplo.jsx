import React, {useState} from 'react'

const Ejemplo = () => {
    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Roxana',
        email: 'roxana@gmail.com' 
        }

        const [contador, setcontador] = useState(valorInicial)
        const [persona, setpersona] = useState(personaInicial)

        function incrementarContador(){
            setcontador(contador + 1)
        }

        function actualizarPersona(){
            setpersona({
                nombre: 'Kevin',
                email: 'kevin@gmail.com'
            })
        }
    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador:{contador}</h2>
            <h2>Datos del usuario:</h2>
            <h3>Nombre:{persona.nombre}</h3>
            <h3>Email:{persona.email}</h3>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Usuario</button>
        </div>
        );
        
}

export default Ejemplo;