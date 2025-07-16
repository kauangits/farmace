import { useContext } from "react";
import { StoreContext } from "./store/storeContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { usuario } = useContext(StoreContext);
  return usuario ? children : <Navigate to="/login" />;
}
