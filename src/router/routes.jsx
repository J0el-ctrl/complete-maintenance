import {
    Routes,
    Route,
} from 'react-router-dom';
import { Home, Login,PanelIntranet,Register } from '../pages/index';
import { Navbar } from '../components/organismos/Navbar';
import { RequireAuth } from '../context/RequireAuth';

export  function Myroutes() {
  return (
    <>
      <Navbar/>
        
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/panelcontrol" element={
              <RequireAuth>
                 <PanelIntranet/>
              </RequireAuth>
                               }/>
            
        </Routes>
    </>
  )
}
