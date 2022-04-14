import React from 'react';
import './Error.css';
import lindoError from '../image/gatito404.png'

const PageError = () => {
  return (
    <div className='error'>
        <div className='estilos'>

        <img src={lindoError} alt="gatito de error 404" />
        <h1>ERROR 404</h1>
        </div>
    </div>
  )
}

export default PageError