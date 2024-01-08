
import React from 'react'
import styled from "styled-components"
import Section from './Section'

export const Model_3 = () => {
  return (
    <Container>
         <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="mOdel-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />    
  
   </Container>
  )
}

const Container = styled.div`
height: 100vh;

`
