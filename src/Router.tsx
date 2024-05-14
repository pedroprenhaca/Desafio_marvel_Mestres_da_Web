import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";


export function Router(){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    )
}