
import React, { useRef, useState } from "react";
import '../styles/layout/login.scss'
import SingIn from "../components/SingIn/SingIn";
import SingUp from "../components/SingUp/SingUp";
import AuthDetails from "../components/AuthDetail/AuthDetails";

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
            <AuthDetails />
            <SingUp />
             <SingIn />
      </>
    )
}
