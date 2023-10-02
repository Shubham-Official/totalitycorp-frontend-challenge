import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

const Home2 = () => {
    return (
        <>
            <div className='bg-gray-100 mt-20'>
                <div>
                    <p className='text-center text-4xl pt-5'>OUR SERVICES</p>
                </div >
                <div className='flex justify-evenly py-10'>
                    <div className='w-52 h-52 border-2 border-black rounded-3xl'>
                        <TbTruckDelivery className='text-5xl mt-10 ml-20' />
                        <p className='mx-16'>Super Fast and Free Delivery</p>
                    </div>
                    <div className='w-52 h-52 border-2 border-black rounded-3xl'>
                        <RiSecurePaymentLine className='text-5xl mt-10 ml-20' />
                        <p className='mx-16'>Contact Less Shipping</p>
                    </div>
                    <div className='w-52 h-52 border-2 border-black rounded-3xl'>
                        <GiReceiveMoney className='text-5xl mt-10 ml-20' />
                        <p className='mx-16'>Hazzle Free Returns</p>
                    </div>
                    <div className='w-52 h-52 border-2 border-black rounded-3xl'>

                        <MdSecurity className='text-5xl mt-10 ml-20' />
                        <p className='mx-16'>Secure And Fast Payments</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home2