import React, {useState, useContext} from'react';

const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h1>Token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
        </div> 
    );
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '12345',
        sesion: 1
    }
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'RRR12345',
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}

