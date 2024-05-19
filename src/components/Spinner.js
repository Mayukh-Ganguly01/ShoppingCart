import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className='h-full flex justify-center items-center'>
        <div className='pulse flex justify-center items-center mx-auto mt-64'></div>
    </div>
    
  )
}

export default Spinner