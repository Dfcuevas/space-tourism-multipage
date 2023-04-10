import Header from '../Header/Header'
import styled from 'styled-components'
import { destinations } from '../../assets/data/data.json'
import { useState } from 'react'

const DestinationsContainer = styled.div`
height: 100vh;
background-image: url('/destination/background-destination-desktop.jpg');
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

.destination-container {
  max-width: 1047px;
  display: flex;
  margin: 64px auto 0;
  justify-content: space-between;
  align-items: center;
}

.data-planet {
  max-width: 445px;

  & h1 {
    color: var(--white-color);
    font-family: var(--ff-bellefair-regular);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 6.25rem;
    line-height: 115px;
    margin-top: 2.3125rem;
  }
  & p {
    font-family: var(--ff-barlow-regular);
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 32px;
    color: var(--secondary-color);
    margin-top: 14px;
  }

  & .line {
    width: 100%;
    border: 1px solid #979797;
    margin: 3.375rem 0 1.75rem;

  }
}

.info-travel {
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 79px;


  & li {
    font-family: var(--ff-bellefair-regular);
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 32px;
    text-transform: uppercase;
    color: var(--white-color);

    & span {
      font-family: var(--ff-barlow-condensed);
      font-size: 0.875rem;
      line-height: 17px;
      letter-spacing: 2.3625px;
      text-transform: uppercase;
      color: var(--secondary-color);
      display: block;
      margin-bottom: 12px;
    }
  }
}

.button-container button.active {
  border-bottom: 3px solid var(--white-color);
}


.button-container button {
  border: none;
  background-color: transparent;
  color: var(--secondary-color);
  font-family: var(--ff-barlow-condensed);
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  padding: 0 0 12px;
  margin-right: 35px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

.button-container button:hover {
  border-bottom: 3px solid var(--secondary-color);
}

@media (max-width: 1115px) {
  height: auto;
  background-image: url('/destination/background-destination-tablet.jpg');
  .title {
    margin-left: 2.4rem;
    font-size: 1.25rem;
    line-height: 24px;
    letter-spacing: 3.375px;
  }

  .span-title {
    margin-right: 19px;
  }

  .destination-container {
    flex-direction: column;
    text-align: center;
  }

  .destination-container img {
    width: 300px;
    height: 300px;
  }

  .data-planet {
    max-width: 575px;
  }

  .data-planet p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  }

  .button-container {
    max-width: 300px;
    margin: 53px auto 32px;
    display: flex;
    justify-content: space-between;
    
  }

  .button-container button {
    margin-right: 0;
  }

  .info-travel {
    justify-content: space-evenly;
  }
}

@media (max-width: 550px) {

  height: 100vh;
  background-image: url('/destination/background-destination-mobile.jpg');


  .title {
    text-align: center;
    margin: 0 0 2rem 0;
    font-size: 1rem;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  .destination-container {
    margin-top: 32px;
  }

  .destination-container img {
    width: 170px;
    height: 170px;
  }

  .button-container {
    margin-top: 26px;
    margin-bottom: 0px;
  }

  .button-container button {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
  }

  .data-planet h1 {
    font-size: 3.5rem;
    line-height: 4rem;
    margin-top: 20px;
  }

  .data-planet p {
    max-width: 327px;
    font-size: 1rem;
    line-height: 25px;
    font-weight: 400;
  }

  .data-planet .line {
    margin: 2rem 0;
  }

  .info-travel {
    flex-direction: column;
    
  }

  .info-travel {
    gap: 32px;
  }
}
`

const Destinations = () => {
  const [planets] = useState(destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    <DestinationsContainer>
      <Header />
      <p className='title'><span className='span-title'>01</span> pick your destination</p>
      <section className='destination-container'>
        <article>
          <img src={images.png} alt={name} />
        </article>
        <article className='data-planet'>
          <div className='button-container'>
            {
            planets.map((items, index) => (

              <button className={value === index && 'active'} key={index} onClick={() => setValue(index)}>{items.name}</button>
            ))
          }
          </div>

          <h1>{name}</h1>
          <p>{description}</p>
          <div className='line' />
          <ul className='info-travel'>
            <li><span>AVG. DISTANCE </span>{distance}</li>
            <li><span>EST. TRAVEL TIME</span>{travel}</li>
          </ul>
        </article>
      </section>
    </DestinationsContainer>
  )
}

export default Destinations
