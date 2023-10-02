import React from 'react'
import Product from './Product';
import Sidebar from './Sidebar';
import { useFilterContext } from '../context/filterContext';
import Sort from './Sort';

const Products = () => {
    const { filterProducts } = useFilterContext();

    return (
        <div className='flex ml-32 mt-10'>
            <div className='w-40 max-w-10'><Sidebar /></div>
            <div className='w-full max-w-full'>
                <div className="flex justify-end mr-48">
                    <Sort />
                </div>
                <div className='flex flex-wrap mt-16 justify-center'>
                    {filterProducts.map((curr) => {
                        return <Product key={curr.id} {...curr} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products