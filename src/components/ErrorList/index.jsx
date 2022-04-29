import data from '../../assets/data/errors.json';
import { Error, Errors } from './style';
import { useNavigate } from 'react-router-dom';

export const ErrorList = () =>{
    const navigate = useNavigate();

    const handleClick = (path) => navigate(`/home/${path}`)

    return(
        <>
            <h2>Lista de posibles errores</h2>
            <Errors>
                {data.map( err => <Error key={err.errorName} onClick={ ()=>handleClick(err.path) } ><p>{err.errorName}</p></Error>)}
            </Errors>
        </>
    )
}