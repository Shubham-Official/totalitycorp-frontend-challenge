import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCart = () => {
    let localCartData = localStorage.getItem("CartStore");

    if (localCartData === null) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCart(),
    totalItem: "",
    totalPrice: "",
    shippingFee: 50,
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    };

    const handleDelete = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    const handleClearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("CartStore", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, handleDelete, handleClearCart }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };