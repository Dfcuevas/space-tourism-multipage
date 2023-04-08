import React from 'react'
import Logo from '../../assets/shared/logo.svg'
import styled from 'styled-components'
import NavBar from '../navBar/NavBar'

const HeaderStyled = styled.header`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 0 2rem;

  .line {
    position: relative;
    left: 90px;
    z-index: 10;
    height: 1px;
    width: 473px;
    background-color: white;
    opacity: 0.25;
  }

  @media (max-width: 1115px) {
    padding: 0;
    .line {
      display: none;
    }

    .logo-container {
      display: block;
      width: 48px;
      height: 48px;
      margin: 24px 0 0 36px;
    }
  }

  @media (max-width: 550px) {
    padding: 24px;

    .logo-container {
      margin: 0;
    }
  }
`

// Para activar el menu hamburguesa, lo que necesito es: al darle click, este dispara un evento que activa una funcion que cambia un estado establecido con un strig que simbolizan las clases que cambian de acuerdo al click realizado.

function Header ({ data }) {
  return (
    <HeaderStyled>
      <img className='logo-container' src={Logo} alt='logo de la aplicacion' />
      <div className='line' />
      <NavBar />
    </HeaderStyled>
  )
}

export default Header
