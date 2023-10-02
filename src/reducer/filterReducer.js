const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            }

        case "SORT_PRODUCT_VALUE":
            return {
                ...state,
                sortValue: action.payload,
            }

        case "SORT_PRODUCTS":
            let sortedProducts;
            const { filterProducts } = state;
            let tempSortProduct = [...filterProducts];

            const sortingProducts = (a, b) => {
                if (state.sortValue === "A-Z") {
                    return a.title.localeCompare(b.title);
                }

                if (state.sortValue === "Z-A") {
                    return b.title.localeCompare(a.title);
                }

                if (state.sortValue === "lowest") {
                    return a.price - b.price;
                }

                if (state.sortValue === "highest") {
                    return b.price - a.price;
                }
            }

            sortedProducts = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filterProducts: sortedProducts,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { allProducts } = state;
            let tempFilterProducts = [...allProducts];

            const { text, category, brand } = state.filters;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((curr) => {
                    return curr.title.toLowerCase().includes(text);
                })
            }

            if (category !== "All") {
                tempFilterProducts = tempFilterProducts.filter((curr) => {
                    return curr.category.toLowerCase() === category.toLowerCase();
                });
            };

            // if (brand !== "all") {
            //     tempFilterProducts = tempFilterProducts.filter((curr) => {
            //         return curr.brand.toLowerCase() === brand.toLowerCase();
            //     });
            // };

            return {
                ...state,
                filterProducts: tempFilterProducts,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    brand: "all",
                },
            }

        default:
            return state;
    }
}

export default filterReducer;