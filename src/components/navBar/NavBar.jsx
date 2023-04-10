import styled from 'styled-components'
import React, { useState } from 'react'
import closeIcon from '../../assets/shared/icon-close.svg'
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg'

const Nav = styled.nav`
  font-family: var(--ff-barlow-condensed);
  font-size: 1rem;
  letter-spacing: 2.7px;
  color: white;
  max-width: 830px;
  background-color: var(--white-blur);
  padding: 0 1rem;
  position: relative;

  & ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    gap: 3.5rem;
    margin: 0 5rem;
    padding: 1.5rem 1.5rem 0;

    & li {
      cursor: pointer;
      padding-bottom: 1.5rem;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid var(--hover-button-color);
      }

      & span {
        margin-right: 5px;
        font-weight: 700;
      }
    }
  }

  & .close-icon {
    display: none;
  }

  .active-element {
    border-bottom: 3px solid white;
  }

  @media (max-width: 1115px) {
    span {
      display: none;
    }

    ul {
      gap: 2.5rem;
      margin: 0;
    }
  }

  @media (max-width: 550px) {
    position: absolute;
    height: 100vh;
    right: 0;
    top: 0;
    backdrop-filter: blur(40.7742px);
    width: 60vw;
    z-index: 10;
    display: none;

    span {
      display: initial;
    }

    ul {
      flex-direction: column;
    }

    &.active {
      display: block;
    }

    & .close-icon {
      display: block;

      display: flex;
      justify-content: flex-end;
      padding: 2rem 1rem;

      & img {
        cursor: pointer;
      }
    }
  }
`

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: block;
    cursor: pointer;

    &.active {
      display: block;
    }
  }

  &.hidden {
    display: none;
  }
`

const NavBar = ({ data }) => {
  const [active, setActive] = useState('')
  const [hamburgernMenu, setHamburgernMenuMenu] = useState('active')
  const [navBar, setNavBar] = useState('hidden')

  const handleChange = (e) => {
    const textoInterno = e.target.innerText
    setActive(textoInterno)
  }

  const activeNav = () => {
    setHamburgernMenuMenu('hidden')
    setNavBar('active')
  }

  const activeCloseButton = () => {
    setNavBar('hidden')
    setHamburgernMenuMenu('active')
  }

  return (

    <>
      <HamburgerMenu
        onClick={activeNav}
        className={`${hamburgernMenu} menu-icon`}
      >
        <img src={hamburgerIcon} alt='icono del menu hamburguesa' />
      </HamburgerMenu>

      <Nav className={`${navBar}`}>
        <div className={`${navBar} close-icon`}>
          <img
            onClick={activeCloseButton}
            src={closeIcon}
            alt='icono de cierre del menu hamburguesa'
          />
        </div>

        <ul>
          {data
            ? (
                data.map((element, id) => (
                  <li key={id} onClick={(e) => handleChange(e)} className={active === element ? 'active-element' : ''}>{element.toUpperCase()}</li>
                ))
              )
            : (
              <>
                <li
                  onClick={(e) => handleChange(e)}
                  className={
              active === 'HOME' || active === '00HOME' ? 'active-element' : ''
            }
                >
                  <span>00</span>HOME
                </li>
                <li
                  onClick={handleChange}
                  className={
              active === 'DESTINATION' || active === '01DESTINATION'
                ? 'active-element'
                : ''
            }
                >
                  <span>01</span>DESTINATION
                </li>
                <li
                  onClick={handleChange}
                  className={
              active === 'CREW' || active === '02CREW' ? 'active-element' : ''
            }
                >
                  <span>02</span>CREW
                </li>
                <li
                  onClick={handleChange}
                  className={
              active === 'TECHNOLOGY' || active === '03TECHNOLOGY'
                ? 'active-element'
                : ''
            }
                >
                  <span>03</span>TECHNOLOGY
                </li>
              </>

              )}

        </ul>
      </Nav>
    </>
  )
}

export default NavBar
