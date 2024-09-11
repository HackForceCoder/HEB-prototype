import { useParams } from 'react-router-dom';

function Comprar() {
    const { nombre } = useParams();     // Nombre del producto (obtenido de url)
    return <h1>Producto: {nombre}</h1>;
}

export default Comprar;
