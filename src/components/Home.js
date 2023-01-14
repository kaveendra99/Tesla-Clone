import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            tittle="Model S"
            description="Order Online for Touch less Delivery"
            BackgroundImg="model-s.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            tittle="Model X"
            description="Order Online for Touch less Delivery"
            BackgroundImg="model-x.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"      
        />
        <Section
            tittle="Model 3"
            description="Order Online for Touch less Delivery"
            BackgroundImg="model-3.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            tittle="Model Y"
            description="Order Online for Touch less Delivery"
            BackgroundImg="model-y.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
        />
        <Section
            tittle="Solar Panel"
            description="Lowest Cost Solar Panel in America"
            BackgroundImg="solar-panel.jpg"
            LeftBtnText="Order Now"
            RightBtnText="Learn More"
        />
        <Section
            tittle="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            BackgroundImg="solar-roof.jpg"
            LeftBtnText="Order Now"
            RightBtnText="Learn More"
        />
        <Section
            tittle="Accessories"
            description=""
            BackgroundImg="accessories.jpg"
            LeftBtnText="Order Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height : 100vh;
`