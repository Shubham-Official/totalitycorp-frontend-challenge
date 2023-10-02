const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "SET_PRODUCTS":
            const featureProducts = action.payload.filter((curr) => {
                return curr.rating > 4.5;
            });

            return {
                ...state,
                products: action.payload,
                featuredProducts: featureProducts,
                isLoading: false,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        // case "SET_LOADING1":
        //     return {
        //         ...state,
        //         isLoading1: true,
        //     }

        // case "SET_PRODUCT":
        //     return {
        //         ...state,
        //         isLoading1: false,
        //         product: action.payload,
        //     }

        // case "API_ERROR1":
        //     return {
        //         ...state,
        //         isLoading1: false,
        //         isError: true,
        //     }

        default:
            return state;
    }

    // if (action.type === "SET_LOADING") {
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }
    // }

    //    if (action.type === "SET_PRODUCTS") {
    //     const featureProducts = action.payload.filter((curr) => {
    //         return curr.rating.rate > 4.0;
    //     });

    //     return {
    //         ...state,
    //         products: action.payload,
    //         featuredProducts: featureProducts,
    //         isLoading: false,
    //     }
    // }
    //      
    //     if (action.type === "API_ERROR") {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError: true,
    //     }
    // };
}

export default ProductReducer;