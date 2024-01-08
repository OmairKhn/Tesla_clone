import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      description="Order online for Touchless Delivery"
      backgroundImg="mOdel-s.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section 
      title="Model y"
      description="Order online for Touchless Delivery"
      backgroundImg="mOdel-y.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      /> 
       <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="mOdel-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
      <Section
       title="Model X"
       description="Order online for Touchless Delivery"
       backgroundImg="mOdel-x.jpg"
       leftBtnText="Custom order"
       rightBtnText="Existing inventory"
       />
       <Section
       title="Lowest Cost Solar Panels in America"
       description="Money-back guarantee"
       backgroundImg="solar-panel.jpg"
       leftBtnText="Order now"
       rightBtnText="Learn more"
       />
        <Section
       title="Solar for New Roofs"
       description="solar Roof Costs Less Than a New "
       backgroundImg="solar-roof.jpg"
       leftBtnText="Order now"
       rightBtnText="Learn more"
       />
         <Section
       title="Solar for New Roofs"
       description=""
       backgroundImg="accessories.jpg"
       leftBtnText="shop now"
       
       />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;

`
