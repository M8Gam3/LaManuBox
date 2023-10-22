import React, { useState } from 'react'
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SingUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <>
        <div className="connexion">
              <form className='form__connexion' onSubmit={signUp}>
                  <div className='form__connexion--title'>
                    <p> Inscription </p>
                  </div>
                  <div className='form__connexion--content'>
                    <div className='form__connexion--email'>
                        <label className='connexion__label' htmlFor="email" > Email </label>
                        <input required name='email' className='input__email' id='email' type="text" placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>  
                    <div className='form__connexion--password'>
                        <label className='connexion__label' htmlFor="password"> Mot de passe </label>
                        <input required name='password' className='input__email' id='password' type="password" placeholder='Mot de passe'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> 
                  </div>

                  <div className='button__connexion--content'>
                    <button type='submit' className='button__connexion--content--item'> Inscription </button>
                  </div>

              </form>
          </div>  
    </>
  )
}
