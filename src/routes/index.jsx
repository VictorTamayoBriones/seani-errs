import { Routes, Route } from "react-router-dom"
import { ErrPage } from "../components/ErrPage"
import { AboutApp } from "../views/AboutApp"
import { Home } from "../views/Home"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <AboutApp/> } />
            <Route path="/home/*" element={ <Home/> }>
                <Route path="err:id" element={ <ErrPage/> } />
            </Route>
        </Routes>
    )
}