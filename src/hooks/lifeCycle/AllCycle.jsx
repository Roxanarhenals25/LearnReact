import React from 'react';

const AllCycle = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion del componente')
        }, 1000);

        return () => {
            console.log('Componente a desaparecer');
            document.title = "tiempo detenido"
            clearInterval(intervalID);
        }
    }, [])

    return (
        <div>

        </div>
    );
}

export default AllCycle;