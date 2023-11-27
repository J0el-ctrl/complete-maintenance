/* eslint-disable react/prop-types */
//ruta protegida

import { Navigate } from "react-router-dom";
import { UserAuth } from "./UserProviderContext"



export const RequireAuth = ({children}) => {
    const {user}=UserAuth();

    // si no existe usuario es false regresa a login
    if(!user){
        return <Navigate to="/login"/>;
    }
    // regresa todos los componentes dentro del RequireAuth en routes
    return children
}
