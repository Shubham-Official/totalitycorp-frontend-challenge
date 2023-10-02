import React from 'react'
import { useFilterContext } from '../context/filterContext'

const Sort = () => {
    const { sortProducts } = useFilterContext();

    return (
        <div className='border-2 border-black'>
            <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onClick={sortProducts}>
                    <option value="lowest">Price(lowest)</option>
                    <option value="highest">Price(highest)</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </form>
        </div>
    )
}

export default Sort