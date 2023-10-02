import React from 'react'
import { NavLink } from 'react-router-dom'

const Home1 = () => {
    return (
        <div className='max-w-{90rem} flex mt-20 justify-center'>
            <div className="w-1/2 mt-5">
                <div className='text-xl'>WELCOME TO</div>
                <div className='mt-5 text-4xl font-semibold'>Amazon.com</div>
                <div className='mt-5 text-4xl'>One Store For All Your Needs</div>
                <div className='mt-5'>
                    <NavLink className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/products">Shop Now</NavLink>
                </div>
            </div>
            <div className=''>
                <img className='w-96 rounded-xl' src="/images/Home1-img.jpg" alt="home1-img" />
            </div>
        </div>
    )
}

export default Home1