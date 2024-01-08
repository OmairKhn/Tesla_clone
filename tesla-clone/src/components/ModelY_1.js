import React from 'react'
import styled from "styled-components"

export const ModelY1 = () => {
  return (
    <Container>
         <h2>About Tesla Model y</h2>
         <img src="/images/teslamodely.jpg" alt=''/>
        <img src="/images/teslayinterior.jpg" alt=''/>
      <p>
        The Tesla Model S is a luxury all-electric sedan known for its impressive
        performance, cutting-edge technology, and sleek design. It was first introduced
        by Tesla, Inc. in 2012 and has since become a benchmark for electric vehicles.
      </p>
      <h3 id='key'>Key Features:</h3>
      <ul>
        <li>High Acceleration</li>
        <li>Long Range Capabilities</li>
        <li>Autopilot System</li>
        <li>Large Touchscreen Display</li>
        <li>Over-the-Air Software Updates</li>
      </ul>
      <h3>Additional Information:</h3>
      <p>
        The Model S is known for its minimalist interior, spacious cabin, and commitment
        to sustainability. With continuous updates and improvements, the Tesla Model S
        remains a symbol of innovation in the electric vehicle market.
      </p>
    </Container>
  )
}


const Container = styled.div`
max-width: 800px;
margin: 50px auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
background-color: #f8f8f8;

h2 {
    color: #333;
  }

  p {
    line-height: 1.6;
    color: #555;
  }
  h3 {
    color: #333;
    margin-top: 16px;
  }
  ul {
    list-style-type: square;
    margin-left: 20px;
  }
#key{
    margin-right:480px;
}
li{

    margin-right:500px;
}
img{
  width:200px;
  height:200px;
  }
`