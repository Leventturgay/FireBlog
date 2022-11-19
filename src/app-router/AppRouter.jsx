import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />

        <Route path="details" element={<PrivateRouter />}>
          <Route path=":id" element={<Detail />} />
        </Route>

        <Route path="newblog" element={<PrivateRouter />}>
          <Route path=":id" element={<NewBlog />} />
        </Route>
        <Route path="details/:id/updateblog/:id" element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
