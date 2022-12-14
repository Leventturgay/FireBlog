import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div>
      {currentUser.email ? <Outlet /> : <Navigate to="/login" replace />}
    </div>
  );
};

export default PrivateRouter;
