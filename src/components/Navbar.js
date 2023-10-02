import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
// import { CgClose, CgMenu } from "react-icons/cg";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between bg-gray-100'>
                <div className='flex mx-12'>
                    <NavLink to="/">
                        <img className="w-32" src="/images/nav-logo.png" alt="logo" />
                    </NavLink>
                </div>
                <div>
                    <ul className='flex mt-6 mr-10 space-x-7'>
                        <li className='text-lg hover:text-gray-400 hover:underline'><NavLink to="/" >Home</NavLink></li>
                        <li className='text-lg hover:text-gray-400 hover:underline'><NavLink to="/products" >Products</NavLink></li>
                        <li className='text-lg hover:text-gray-400 hover:underline'><NavLink to="/about" >About</NavLink></li>
                        <li className='text-lg hover:text-gray-400 hover:underline'><NavLink to="/contact" >Contact</NavLink></li>
                        <li className='text-lg hover:text-gray-400'><NavLink to="/cart" >
                            <FiShoppingCart /></NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div>
                    <CgMenu />
                    <CgClose />
                </div> */}
            </div>


        </>
    )
}

export default Navbar