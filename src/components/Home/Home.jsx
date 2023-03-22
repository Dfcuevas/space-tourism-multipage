import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const Container = styled.div`
margin: 0;
background-image: url('../../../public/background-home-desktop.jpg');
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
`

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default Home
