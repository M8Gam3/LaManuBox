import React, { useRef, useState } from "react";

export function Login() {

    const email = useRef();
    const password = useRef();


    const registerUser = () => {
        if(email.current.value && password.current.value)
        {
            localStorage.setItem("email" , email.current.value)
            localStorage.setItem("password" , password.current.value)
        }
    }


    const login = () =>{
        if(localemail && localpassword)
        {
            console.log("login réussie");
        }
    }

    return (
        <>
                      
            <div className="login">
                <p> Connextion </p>
                <form className="form" action="">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" /> 
                     <button type="button" onClick={login}> Login </button>
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="remember"> Remember me  </label>
                    </div>
                    <p> forget your passaword </p>
                </form>
            </div>

            <div className="login">
                <p> Incription </p>
                <form className="form" action="">
                    <input type="email" placeholder="Email" ref={email} />
                    <input type="password" placeholder="Password" ref={password} /> 
                     <button type="submit" onClick={registerUser}> create acount </button>
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="remember"> Remember me  </label>
                    </div>
                    <p> forget your passaword </p>
                </form>
            </div>
        </>
    )
}