import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home/Index";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Movies } from "./pages/Movies";
import { Hqs } from "./pages/Hqs";


export function Router(){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/personagens" element={<Home/>}/>
                <Route path="/filmes" element={<Movies/>}/>
                <Route path="/hqs" element={<Hqs/>}/>
            </Route>
        </Routes>
    )
}