import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const FavoritesRoute = () => {
  const isLogged = useSelector((state) => state.auth.loggedIn);
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

const AdminRoute = () => {
  const isAdmin = useSelector((state) => state.auth.admin);

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export { FavoritesRoute, AdminRoute };
