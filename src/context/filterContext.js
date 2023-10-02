import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    sortValue: "lowest",
    filters: {
        text: "",
        category: "all",
        brand: "all",
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const sortProducts = (event) => {
        let selectedValue = event.target.value;
        dispatch({ type: "SORT_PRODUCT_VALUE", payload: selectedValue });
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORT_PRODUCTS" });
    }, [products, state.sortValue, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, sortProducts, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}