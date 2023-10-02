import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../context/productContext';
import Shimmer from './shimmerUI';
import { FaPlus, FaMinus } from "react-icons/fa6"
import { useCartContext } from '../context/cartContext';

const SingleProduct = () => {
    const { addToCart } = useCartContext();
    const [product, setProduct] = useState(null);
    const { products } = useProductContext();
    const [amount, setAmount] = useState(1);
    const { id } = useParams();

    const setIncrease = () => {
        amount < 5 ? setAmount(amount + 1) : setAmount(5);
    }

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    useEffect(() => {
        const getProductDetails = () => {
            const data = products.find((curr) => curr.id === +id);
            if (data) {
                setProduct(data);
            }
        };

        if (products.length > 0) {
            getProductDetails();
        }
    }, [id, products, amount]);

    if (!product) {
        return <Shimmer />;
    }

    const { title, images, description, price, rating } = product;

    return (
        <div className='mx-10 mt-16 flex'>
            <div className='w-1/2 max-w-lg'><img className='w-full rounded-2xl  border-2 border-gray-700' src={images[0]} alt="img" /></div>
            <div className='w-1/2 mx-10'>
                <div className='text-3xl my-1'>{title?.toUpperCase()}</div>
                <div className='text-s font-semibold text-gray-400 my-1'>Ratings: {rating} (500 customer reviews)</div>
                <div className='text-xl'>{description}</div>
                <div className='my-2 text-lg font-sans'>MRP: &#8377;{price}</div>
                <div className='mt-56'>
                    <div className='w-full border-2 border-black'></div>
                    <div className='flex w-28 justify-evenly my-2'>
                        <div className='my-1 cursor-pointer' onClick={() => setDecrease()}><FaMinus /></div>
                        <div className='text-lg font-semibold'>{amount}</div>
                        <div className='my-1 cursor-pointer' onClick={() => setIncrease()}><FaPlus /></div>
                    </div>
                    <div className='mt-5 '>
                        <NavLink className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/cart" onClick={() => addToCart(id, amount, product)}>Add to cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default SingleProduct;
