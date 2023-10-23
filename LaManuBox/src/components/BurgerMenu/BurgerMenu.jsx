import React, { useState } from 'react'
import './BurgerMenu.scss'

export default function BurgerMenu({mobileMenu}) {

  return (
    <>
        <input type="checkbox" id="checkbox" name='checkbox' onClick={mobileMenu}/>
        <label htmlFor='checkbox' className="toggle">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
        </label>
    </>
  )
}
