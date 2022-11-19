import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  const user = true;
  console.log(currentUser);
  return <div>{user ? <Outlet /> : <Navigate to="/login" replace />}</div>;
};

export default PrivateRouter;
