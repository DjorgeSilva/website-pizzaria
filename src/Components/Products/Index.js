import React from 'react'
import {
    ProcuctContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from "./ProductsElements.js"

export default function Index({heading, data}) {
    console.log(data)
    return (
        <ProcuctContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((produto, index) => {
                    return(
                    <ProductCard key={index}>
                        <ProductImg src={produto.img} alt={produto.alt} />
                        <ProductInfo>
                            <ProductTitle>{produto.name}</ProductTitle>
                            <ProductDesc>{produto.desc}</ProductDesc>
                            <ProductPrice>{produto.price}</ProductPrice>
                            <ProductButton>{produto.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )}
                )}
            </ProductWrapper>
        </ProcuctContainer>
    )
}
