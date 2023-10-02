import React from 'react'
import { useFilterContext } from '../context/filterContext'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { filters: { text, category, company }, allProducts, updateFilterValue, clearFilters } = useFilterContext();

    const getCategoryData = (data, property) => {
        let newProductData = data.map((curr) => {
            return curr[property]
        })
        return (newProductData = ["All", ...new Set(newProductData)]);
    }

    const getCompanyData = (data, property) => {
        let newProductData = data.map((curr) => {
            return curr[property]
        })
        return (newProductData = ["All", ...new Set(newProductData)]);
    }

    const categoryData = getCategoryData(allProducts, "category");
    const companyData = getCompanyData(allProducts, "brand")

    return (
        <div>
            <div className="flex items-center">
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={updateFilterValue}
                        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div className='text-lg font-semibold mt-10'>Category</div>
            <div>
                {categoryData.map((curr, index) => {
                    return <button className='flex my-1' key={index} type='button' name="category" value={curr} onClick={updateFilterValue}>{curr}
                    </button>
                })}
            </div>
            <div className='text-lg font-semibold mt-10'>Company</div>
            <div className='mt-5'>
                <form action="#">
                    <label htmlFor="sort"></label>
                    <select className='w-full border-2 border-black ' name="sort" id="brand" onClick={updateFilterValue}>
                        {companyData.map((curr, index) => {
                            return (
                                <option key={index} name="brand" value={curr}>{curr}</option>
                            )
                        })}
                    </select>
                </form>
            </div>
            <div className='mt-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer' onClick={clearFilters}>
                CLEAR FILTERS
            </div>
        </div>
    )
}

export default Sidebar