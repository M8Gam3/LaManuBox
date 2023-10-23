import React, { useState } from 'react'
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SingIn () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
              <form className='form__connexion' onSubmit={signIn}>
                  <div className='form__connexion--title'>
                    <p> Connexion </p>
                  </div>
                  <div className='form__connexion--content'>
                    <div className='form__connexion--email'>
                        <label className='connexion__label' htmlFor="connexion__label"> Email </label>
                        <input className='input__email' id='input__email' type="text" placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>  
                    <div className='form__connexion--password'>
                        <label className='connexion__label' htmlFor="connexion__label"> Mot de passe </label>
                        <input className='input__email' id='connexion__label' type="password" placeholder='Mot de passe'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> 
                    <div className='form__connexion--rappel'>
                      <p> Si vous n’avez pas de compte <a href="/Register"> Inscrivez-vous </a> </p>
                    </div>
                  </div>

                  <div className='button__connexion--content'>
                    <button type='submit' className='button__connexion--content--item'> Connexion </button>
                  </div>

              </form>
          </div>  
    </>
  )
}
