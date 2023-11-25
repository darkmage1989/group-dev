import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import WorkoutPage from "./components/Workout/Workout";
import Profile from "./pages/Profile/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="workout/:id" element={<WorkoutPage />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
