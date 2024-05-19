import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'




const Cart = () => {
  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0));

  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ? 
        (<div className='flex flex-row'>
            <div>
              {
                cart.map((item, index) =>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>


            <div className='w-[50%]'>
              <div>
                <div className='font-semibold text-green-700 text-2xl mt-24'>Your Cart</div>
                <div className='flex font-semibold text-5xl text-green-500 uppercase'>Summary</div>
                <p className='font-semibold mt-5 text-2xl'>  
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>


              <div>
                <p className='font-semibold mt-5 text-2xl'>Total Amount: ${totalAmount}</p>
                <button className='m-5 px-7 py-3 border-[2px] border-green-600 bg-green-600 rounded-md hover:bg-white hover:text-green-500 transition-all ease delay-150 duration-300'>CheckOut Now</button>
              </div>
            </div>


        </div>) : 
        (<div className='flex flex-col h-screen justify-center items-center mx-auto'><h1 className='font-semibold text-2xl text-slate-600'>Your cart is empty</h1>
        <Link to="/">
          <button className='m-5 px-7 py-3 border-[2px] border-green-600 bg-green-600 rounded-md hover:bg-white hover:text-green-500 transition-all ease delay-150 duration-300'>Shop now</button>
        </Link></div>)
      }
    </div>
  )
}

export default Cart