import React from 'react'

import './Product.css'

const Product = (props) => {
  return (
    <div className='p'>
        <div className="p-bar">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={props.link} target='_blank' rel="noreferrer">
            <img src={props.img} className='p-img' alt="" />
        </a>
    </div>
  )
}

export default Product