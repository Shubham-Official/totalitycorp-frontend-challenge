import React from 'react'
import Home1 from './Home1'
import { useProductContext } from '../context/productContext';

const About = () => {
    const { myName } = useProductContext();

    const data = {
        name: "Shubham Agarwal",
    }

    return (
        <>
            {myName}
            <Home1 myData={data} />
        </>
    )
}

export default About