import React from 'react'
import styled from "styled-components"
import Section from './Section'
export const Model_s = () => {
  return (
<Container>
      <Section
      title="Model S"
      description="Order online for Touchless Delivery"
      
      backgroundImg="dmitry-novikov-49gi04Retc4-unsplash.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      /> 
         
      </Container>
      
  )
}

const Container = styled.div`
height: 100vh;

`

