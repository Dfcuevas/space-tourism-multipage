import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { technology } from '../../assets/data/data.json'
import Header from '../Header/Header'

const TechContainer = styled.main`

height: 100vh;
background-image: url(/technology/background-technology-desktop.jpg);
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

.tech-container {
  display: flex;
  margin: 26px 0 0 166px;
  justify-content: space-between;
}

.tech-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  
}

.tech-btn button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  font-family: var(--ff-bellefair-regular);
  font-size: 2rem;
  line-height: 37px;
  text-align: center;
  letter-spacing: 2px;
  color: #0b0d17;
}

.tech-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tech-data h2 {
  text-transform: uppercase;
  font-weight: 400;
  font-family: var(--ff-barlow-condensed);
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: var(--secondary-color);
  margin-bottom: 11px;
}

.tech-data h1 {
  text-transform: uppercase;
  font-family: var(--ff-bellefair-regular);
  color: var(--white-color);
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 4rem;
}

.tech-data p {
  font-family: var(--ff-barlow-regular);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2rem;
  color: var(--secondary-color);
  max-width: 444px;
}
`

const Technology = () => {
  const [tech] = useState(technology)
  const [value, setValue] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const { description, images, name } = tech[value]

  return (
    <TechContainer>
      <Header />
      <p className='title'><span className='span-title'>03</span> space launch 101</p>
      <section className='tech-container'>
        <div className='tech-btn'>
          {
          tech.map((item, index) => (
            <button key={index} onClick={() => setValue(index)}>
              {index + 1}
            </button>
          ))
        }
        </div>
        <div className='tech-data'>
          <h2>the terminology...</h2>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className='tech-images'>
          <img src={width > 1115 ? images.portrait : images.landscape} alt={name} />
        </div>
      </section>
    </TechContainer>
  )
}

export default Technology
