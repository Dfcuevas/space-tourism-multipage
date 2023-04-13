import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import ExploreButton from '../explore-button/ExploreButton'

const Container = styled.div`
  margin: 0;
  background-image: url("/background-home-desktop.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  .data-container {
    margin: 6rem auto 0;
    display: flex;
    height: 70vh;
    max-width: 85vw;
    align-items: flex-end;
    justify-content: space-between;
    padding-inline: 4rem;
  }

  .left-data {
    max-width: 450px;

    & h1 {
      font-size: var(--fs-h1);
      font-family: var(--ff-barlow-condensed);
      letter-spacing: 4.75px;
      text-transform: uppercase;
      color: var(--secondary-color);

      & span {
        font-size: var(--big-heading);
        display: block;
        font-family: var(--ff-bellefair-regular);
        text-transform: uppercase;
        color: var(--white-color);
      }
    }

    & p {
      font-size: var(--fs-p);
      font-family: var(--ff-barlow-regular);
      color: var(--secondary-color);
      line-height: 32px;
    }
  }

  @media (max-width: 1115px) {
    background-image: url("/background-home-tablet.jpg");
    background-position: center;

    .data-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .left-data {
      & h1 {
        font-size: 20px;
        font-weight: 400;
      }

      & p {
        font-size: 16px;
        line-height: 28px;
      }
    }
  }

  @media (max-width: 550px) {
    .left-data h1 span {
      font-size: 80px;
      line-height: 100px;
    }

    .left-data h1 {
      font-size: 16px;
      line-height: 19px;
    }

    .left-data p {
      font-size: 15px;
    }
  }
`

const Home = () => {
  return (
    <Container>
      <Header />
      <div className='data-container'>
        <div className='left-data'>
          <h1>
            So, you want to travel to <span>space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <ExploreButton />
        </div>
      </div>
    </Container>
  )
}

export default Home
