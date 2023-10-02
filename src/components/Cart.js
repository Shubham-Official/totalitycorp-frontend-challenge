import React from 'react'
import { useCartContext } from '../context/cartContext'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Cart = () => {
    const { cart, handleClearCart, totalPrice, shippingFee } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <div>
                    <div className='flex justify-center my-14 text-3xl'>No Items In Cart</div>
                    <div className='flex justify-center mt-5'>
                        <NavLink className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/products">Continue Shopping</NavLink>
                    </div>
                </div>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <div className='w-3/4 my-10 mx-auto'>
                    <div className='grid grid-cols-5 content-between'>
                        <p>Item</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        <p>Remove</p>
                    </div>
                    <hr className='my-2' />
                    <div>
                        {cart.map((curr) => {
                            return <CartItem key={curr.id} {...curr} />
                        })}
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between'>
                        <div className='mt-5 '>
                            <NavLink className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/products">Continue Shopping</NavLink>
                        </div>
                        <div className='mt-5'>
                            <NavLink className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleClearCart()}>Clear Cart</NavLink>
                        </div>
                    </div>
                    <div className="my-10">
                        <div className='w-1/4 bg-gray-100 float-right'>
                            <div className='m-5 flex justify-between'>
                                <p>Subtotal: </p>
                                <p className='text-lg font-semibold'>&#8377;{totalPrice}</p>
                            </div>
                            <div className='m-5 flex justify-between'>
                                <p>Shipping Fee:</p>
                                <p className='text-lg font-semibold'>&#8377;{shippingFee}</p>
                            </div>
                            <hr />
                            <div className='m-5 flex justify-between'>
                                <div >
                                    <NavLink className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded" to="/checkout">CheckOut</NavLink>
                                </div>
                                <p className='text-lg font-semibold'>&#8377;{totalPrice + shippingFee}</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* < Footer /> */}
            </>
        )
    }

}

export default Cart