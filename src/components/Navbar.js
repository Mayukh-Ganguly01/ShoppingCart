import React from 'react'
import { FaOpencart } from "react-icons/fa";
import logo from "./photoes/logo.jpg"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const {cart} = useSelector((state) => state)
  return (
    <div className=' '>
        <nav className='flex justify-between items-center h-25 max-w-6xl mx-auto'>
            <NavLink to='/'>
                <div className='m-3'>
                    <img src={logo}
                alt='logo' className='h-[80px] w-[150px]'
                    />
                </div>
            </NavLink>
            <div className='flex items-center font-2xl text-slate-100 mr-5 space-x-6'>
                <NavLink to="/">
                    <div>
                        <p>Home</p>
                    </div>
                </NavLink>

                <NavLink to="/cart">
                    <div className='relative'>
                        <FaOpencart className='text-3xl'/>
                        {
                            cart.length > 0 &&
                            <span className='absolute -top-1 -rigth-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                        }
                        
                    </div>
                </NavLink>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar