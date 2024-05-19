import React from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch()
  function removeFromCart(){
    dispatch(remove(item.id))
    toast.success('Item removed')
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row p-10 border-b-2 border-b-black'>
          <div className='h-[300px] pr-5'>
            <img src={item.image} alt='image' className='w-full h-full'/>
          </div>
        <div className='w-[50%]'>
          <div className='m-10 flex flex-col text-slate-600'>
            <h1>{item.title}</h1>
            <h1>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          </div>
        <div className='flex flex-row justify-between ml-10'>
          <p className='text-green-500 font-bold text-2xl'>{item.price}</p>
            <div onClick={removeFromCart} className='p-3 border-[1px] rounded-full bg-red-400 hover:bg-red-500 hover:cursor-pointer'>
            <FcEmptyTrash />
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
 
export default CartItem