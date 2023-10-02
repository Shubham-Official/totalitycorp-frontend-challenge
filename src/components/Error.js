import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-4/5">
                <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                        <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                <span className="text-red-500">Oops!</span> Page Not Found

                            </p>
                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                The page you’re looking for doesn’t exist.
                            </p>
                            <NavLink
                                to="/"
                                className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
                            >Go home
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error