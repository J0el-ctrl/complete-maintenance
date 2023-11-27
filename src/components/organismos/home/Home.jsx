import { UserAuth } from "../../../context/UserProviderContext"



export  function Home() {
   const {user,setUser}=UserAuth();

  const cambie=()=>{
    setUser(!user)
  }
  return (
    <div>
      <span>Lorem ipsum dolor sit amet.</span>
      <br />
        <span>
            {
              user?"en linea":"offline"
            }
        </span>
        <br />
        <button onClick={cambie} >acceder</button>
    </div>
  )
}
