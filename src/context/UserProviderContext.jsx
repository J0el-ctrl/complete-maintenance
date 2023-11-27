/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { createContext } from "react"


export const UserContext=createContext();
export const UserProvider = (props) => {

    const [user, setUser] = useState(false)

  return (
     <UserContext.Provider value={{user, setUser}} >
        {/* permite mostrar todos los componentes */}
            {props.children}
     </UserContext.Provider>

  )
}

//hook perzonalizado de
export const UserAuth=()=>{
    return useContext(UserContext);
}

// como usarlo en los components
// import { UserAuth } from "../context/AuthContext";
// export function Login() {
//   const { user,setUser } = UserAuth();
// return()
// }