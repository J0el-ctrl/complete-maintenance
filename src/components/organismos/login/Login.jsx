import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/UserProviderContext"



export  function Login() {
  const{user,setUser}=UserAuth();
  const navegate=useNavigate();

  const handleClickLogin=()=>{
    setUser(true);
    navegate("/panelcontrol")
  }
  return (
    <div>
      <h1>panel control</h1>
      <h2>{user?"Conectado":"Fuera de linea"}</h2>
      <button onClick={handleClickLogin} >Acceder</button>
    </div>
  )
}
