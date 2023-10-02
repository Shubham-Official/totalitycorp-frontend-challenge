import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const data = await fetch(url);
            const products = await data.json();
            dispatch({ type: "SET_PRODUCTS", payload: products.products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    // const getSingleProduct = async (products) => {
    //     dispatch({ type: "SET_LOADING1" });
    //     try {
    //         const data = products.filter((curr) => {
    //             return cur
    //         })
    //         const product = await data.json();
    //         dispatch({ type: "SET_PRODUCT", payload: product });
    //     } catch (error) {
    //         dispatch({ type: "API_ERROR1" });
    //     }
    // }

    useEffect(() => {
        getProducts(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    )
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };
