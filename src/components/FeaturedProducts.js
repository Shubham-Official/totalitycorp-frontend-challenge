import React from 'react';
import { useProductContext } from '../context/productContext';
import Product from './Product';
import ShimmerUI from "./shimmerUI"

const FeaturedProducts = () => {
    const { isLoading, featuredProducts } = useProductContext();

    if (isLoading) {
        return <ShimmerUI />
    }

    return (
        <div className='pb-10 mt-14'>
            <div className='flex text-3xl justify-center mb-10' > FEATURED PRODUCTS</ div>
            <div className='flex flex-wrap justify-evenly'>
                {featuredProducts?.map((curr) => {
                    return <Product key={curr.id} {...curr} />
                })}
            </div>
        </div >
    )

}

export default FeaturedProducts;