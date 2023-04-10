import React, { useState } from 'react'
import styled from 'styled-components'
import { crew } from '../../assets/data/data.json'
import Header from '../Header/Header'

const CrewContainer = styled.main`
height: 100vh;
background-image: url('../../../public/crew/background-crew-desktop.jpg');
background-repeat: no-repeat;
background-size: cover;

.title {
font-family: var(--ff-barlow-condensed);
font-weight: 400;
font-size: 28px;
line-height: 34px;
letter-spacing: 4.725px;
text-transform: uppercase;
color: var(--white-color);
margin: 4.76rem 0 0 10.25rem;
}

.span-title {
  font-weight: 700;
  opacity: 0.25;
  margin-right: 28px;
}
`

const Crew = () => {
  const [theCrew] = useState(crew)
  const [value, setValue] = useState(0)

  const { name, images, bio, role } = theCrew[value]

  return (
    <CrewContainer>
      <Header />
      <p className='title'><span className='span-title'>02</span> meet your crew</p>
      <section className='crew-container'>
        <article className='data-crew'>
          <h2>{role}</h2>
          <h1>{name}</h1>
          <p>{bio}</p>
        </article>
        <article className='member-crew'>
          <img src={images.png} alt={name} />
        </article>
      </section>
    </CrewContainer>
  )
}

export default Crew
