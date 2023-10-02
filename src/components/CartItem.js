import React from 'react'
import { FaTrash } from "react-icons/fa6"
import { useCartContext } from '../context/cartContext';

const CartItem = ({ id, name, image, price, amount }) => {
    const { handleDelete } = useCartContext();

    return (
        <div className='grid grid-cols-5 content-between my-7'>
            <div className='flex' >
                <img className='w-10' src={image} alt="img" />
                <p>{name}</p>
            </div>
            <div>
                <p>&#8377;{price}</p>
            </div>

            <div className='flex w-28 justify-evenly my-2'>
                <div className='text-lg'>{amount}</div>
            </div>
            <div>
                <p>&#8377;{price * amount} </p>
            </div>
            <div><FaTrash className='cursor-pointer' onClick={() => handleDelete(id)} /></div>
        </div >
    )
};

export default CartItem