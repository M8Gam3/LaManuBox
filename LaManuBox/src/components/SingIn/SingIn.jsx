import React, { useState } from 'react'

export default function SingIn () {

  const [email , setEmail] = useState();
  

  return (
    <>
          <div className="connexion">
              <form className='form__connexion' action="">
                  <div className='form__connexion--title'>
                    <p> Connexion </p>
                  </div>
                  <div className='form__connexion--content'>
                    <div className='form__connexion--email'>
                        <label className='connexion__label' htmlFor="connexion__label"> Mail </label>
                        <input className='input__email' id='input__email' type="text" placeholder='Mail' 
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>  
                    <div className='form__connexion--password'>
                        <label className='connexion__label' htmlFor="connexion__label"> Mot de passe </label>
                        <input className='input__email' id='connexion__label' type="text" placeholder='Mot de passe'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> 
                    <div className='form__connexion--rappel'>
                      <p> Si vous n’avez pas de compte <a href="/"> Inscrivez-vous </a> </p>
                    </div>
                  </div>

                  <div className='button__connexion--content'>
                    <button  type='button' className='button__connexion--content--item'> Connexion </button>
                  </div>

              </form>
          </div>  
    </>
  )
}
