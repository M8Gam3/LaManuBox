import React, { useRef, useState } from "react";
import '../styles/layout/login.scss'
import SingIn from "../components/SingIn/SingIn";
import AuthDetails from "../components/AuthDetail/AuthDetails";
import NavBar from "../components/Nav/NavBar";

export default function Login() {

      const [active , setActive] = useState(false);

      const handleActive = () => {
            setActive(!active)
      }

    return (
//       <div className="login">  
//       <button onClick={handleActive}> 
//         {active ? 'Se Deconnecter' : ' Se Connecter '}
//       </button>
//       {active && <SingIn></SingIn>}
//     </div>

      <>
            <NavBar />
            <SingIn />
      </>
    )
}
