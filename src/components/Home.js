import React from 'react'
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Footer from './Footer';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <>
            <Home1 />
            <FeaturedProducts />
            <Home2 />
            <Home3 />
            <Footer />
        </>
    )
}

export default Home;