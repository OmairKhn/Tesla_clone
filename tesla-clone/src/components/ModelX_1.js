import React from 'react'
import styled from "styled-components"

export const ModelX_1 = () => {
  return (
    <div class="teslax">
       <header>
    <h1>Tesla Model X</h1>
  </header>

  <section>
    <div class="car-container">
      <img class="car-image" src="/images/teslayinterior.jpg" alt="Tesla Model X"/>
      <img class="car-image" src="/images/model-x.jpg" alt="Tesla Model X"/>
    </div>

    <h2>Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
  </section>

  <section>
    <h2>Specifications</h2>
    <ul>
      <li><strong>Acceleration:</strong> 0-60 mph in 2.5 seconds</li>
      <li><strong>Range:</strong> XXX miles</li>
      <li><strong>Top Speed:</strong> XXX mph</li>
      <li><strong>Battery:</strong> XXX kWh</li>
      <li><strong>Charging Time:</strong> XXX minutes</li>
    </ul>
  </section>

  <section>
    <h2>Features</h2>
    <ul>
      <li>Electric SUV</li>
      <li>Autopilot technology</li>
      <li>Premium interior</li>
      <li>Advanced safety features</li>
    </ul>
  </section>

  <section>
    <h2>Pricing</h2>
    <p>Starting at $XXX,XXX</p>
  </section>
    </div>
  )
}

