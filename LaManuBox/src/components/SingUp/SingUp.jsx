import React, { useState , useEffect } from 'react'

export default function SingUp() {

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
      setFormValues(JSON.parse(storedFormValues));
    }


  }, []);

  const registerUser = () => {
    if(formValues.confirmPassword.length && formValues.password.length < 6){
      console.log('mot de passe trop court');
    }
    else if(formValues.confirmPassword !== formValues.password){
      console.log(` le mot de passe n'est pas le même `);
    }
    else{
      localStorage.setItem("formValue" , JSON.stringify(formValues));
    }
    
   const log = localStorage.getItem('formValues')
    console.log(log);
  };

  

  return (
    <>
        <div className="connexion">
              <form className='form__connexion' >
                  <div className='form__connexion--title'>
                    <p> Inscription </p>
                  </div>
                  <div className='form__connexion--content'>
                    <div className='form__connexion--email'>
                        <label className='connexion__label' htmlFor="email" > Email </label>
                        <input required name='email' className='input__email' id='email' type="text" placeholder='Email' 
                        value={formValues.email}
                        onChange={handleChange}
                        />
                    </div>  
                    <div className='form__connexion--password'>
                        <label className='connexion__label' htmlFor="password"> Mot de passe </label>
                        <input required name='password' className='input__email' id='password' type="password" placeholder='Mot de passe'
                        value={formValues.password}
                        onChange={handleChange}
                        />
                    </div> 
                    <div className='form__connexion--password'>
                        <label className='connexion__label' htmlFor="confirmPassword"> Confirmer le mot de passe </label>
                        <input required name='confirmPassword' className='input__email' id='confirmPassword' type="password" placeholder='Confirmer le mot de passe'
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        />
                    </div> 
                  </div>

                  <div className='button__connexion--content'>
                    <button onClick={registerUser}  type='button' className='button__connexion--content--item'> Inscription </button>
                  </div>

              </form>
          </div>  
    </>
  )
}
