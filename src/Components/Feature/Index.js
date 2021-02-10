import React from 'react'
import {FeatureContainer, FeatureButton} from "./FeatureElements.js"

export default function Index() {
    return (
        <FeatureContainer>
            <h1>Pizza do dia</h1>
            <p>Mussarela, frango, requeijão, tomate, azeitona preta, oregano e manjericão.</p>
            <FeatureButton>Order now</FeatureButton>
        </FeatureContainer>
    )
}
