import React from 'react'
import Logo from '../../assets/shared/logo.svg'
import styled from 'styled-components'

const HeaderStyled = styled.header`
display: flex;
font-size: 16px;
justify-content: space-between;
align-items: center;
padding: 1.5rem 0 0 2rem;

& .line {
  position: relative;
  left: 90px;
  z-index: 10;
  height: 1px;
  width: 473px;
  background-color: white;
  opacity: 0.25;
}
`

const NavBar = styled.nav`
font-family: var(--nav-font);
font-size: 1rem;
letter-spacing: 2.7px;
color: white;
max-width: 830px;
background-color: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(2px);
padding:0 1rem;

  
& ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  gap: 3.5rem;
  margin:0 5rem ;
  padding:1.5rem 1.5rem 0;

  & li {
    cursor: pointer;
    border-bottom: 3px solid white;
    padding-bottom: 1.5rem;

    & span {
      margin-right: 5px;
    }
  }
}
`

function Header () {
  return (
    <HeaderStyled>
      <div>
        <img src={Logo} alt='logo de la aplicacion' />
      </div>
      <div className='line' />
      <NavBar>
        <ul>
          <li><span>00</span>HOME</li>
          <li><span>01</span>DESTINATION</li>
          <li><span>02</span>CREW</li>
          <li><span>03</span>TECHNOLOGY</li>
        </ul>
      </NavBar>
    </HeaderStyled>
  )
}

export default Header
