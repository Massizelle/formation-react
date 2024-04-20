import React from 'react'

export const ProductDetail= ( props) =>{
const product = props.product
  return (
    <div>
        <ProductInfo name={product.name} price={product.price} description={product.description}/>
    </div>
  )
}

const ProductInfo =({name , price , description})=>{
return(
    <>
    <h1>{name}</h1>
    <h2>{price}</h2>
    <h2>{description}</h2>
    </>
)
}