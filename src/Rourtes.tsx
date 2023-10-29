import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
 
const AppRoutes = () => {
    return ( <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/" element={<Main/>}></Route>
        </Routes>
        </BrowserRouter> );
}
 
export default AppRoutes;