import React from 'react'
import styled from "styled-components"
import Section from './Section'
export const Model_x = () => {
  return (
    <Container>
    <Section
    title="Model X"
    description="Order online for Touchless Delivery"
    backgroundImg="jorgen-hendriksen-dLn6nUY-5zg-unsplash (1).jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing inventory"
    />
    </Container>
  )
}



const Container = styled.div`
height: 100vh;

`
