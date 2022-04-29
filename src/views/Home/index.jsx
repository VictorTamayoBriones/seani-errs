import { Outlet } from 'react-router-dom'
import { ErrorList } from '../../components/ErrorList'

export const Home = () =>{
    return(
        <>
            <ErrorList/>
            <Outlet/>
        </>
    )
}