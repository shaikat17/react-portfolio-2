import React from 'react'

import { products } from '../../data'

import './ProductList.css'
import Product from '../Product/Product'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item=>(
        <Product img={item.img} link={item.link} key={item.id} />
        ))} 
      </div>
    </div>
  )
}

export default ProductList