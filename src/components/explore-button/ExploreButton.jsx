import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
    display: grid;
    align-content: center;
    justify-content: center;
    width: 274px;
    height: 274px;
    background-color: var(--white-color);
    aspect-ratio: 1;
    border-radius: 50%;
    font-family: var(--ff-bellefair-regular);
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--hover-button-color);
      border-radius: 50%;
      z-index: -1;
      opacity: 0;
      transition: opacity 500ms ease-in, transform 750ms ease-in-out;
    }
    &:hover::after {
      opacity: 1;
      transform: scale(1.5);
    }

    @media (max-width: 1115px) {
      width: 242px;
      height: 242px;
    }

    @media (max-width: 550px) {
      width: 150px;
      height: 150px;
      font-size: 20px;
    }
`

const ExploreButton = () => {
  return (
    <Button>
      Explore
    </Button>
  )
}

export default ExploreButton
