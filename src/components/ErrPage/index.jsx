import { ErrorDetail } from "../ErrorDetail";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import data from '../../assets/data/errors.json'

export const ErrPage = () =>{
    const {pathname} = useLocation();
    let errPath = pathname.slice(6)
    const [err, setErr]=useState({})
    
    useEffect(()=>{
        setErr(data.filter(err => err.path === errPath))
    },[pathname])
    
    return(
        <>
            <h2>Aqui se muestra la solución al error</h2>
            <ErrorDetail error={err[0]} />
        </>
    )
}