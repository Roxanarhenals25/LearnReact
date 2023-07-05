import React, {useEffect, useState, useRef} from 'react';

const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    function incrementar1 (){
        setContador1(contador1 + 1)
    }
    
    function incrementar2(){
        setContador2(contador2 + 1)
    }
    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia al elemento del DOM');
    //     console.log(miRef);
    // })
    useEffect(() => {
        console.log('Cambio en el estado del contador1');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1])

    return (
    <div>
        <h1>Uso de useEffect, useRef, useState :</h1>
        <h2>Contador1:{contador1}</h2>
        <h2>Contador2:{contador2}</h2>
        <h3 ref={miRef}>
            Elemento Referenciado
        </h3>
        <div> 
            <button onClick={incrementar1}>Incrementar Contador 1</button>
            <button onClick={incrementar2}>Incrementar Contador 2</button>
        </div>
    </div>
);
}

export default Ejemplo2;