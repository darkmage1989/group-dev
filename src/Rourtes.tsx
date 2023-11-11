import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";
 
const AppRoutes = () => {
    return ( <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/" element={<Main/>}></Route>
            <Route path="workout/:id" element={<WorkoutPage/>}/>
        </Routes>
        </BrowserRouter> );
}
 
export default AppRoutes;