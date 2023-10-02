const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

        let productExist = state.cart.find((curr) => curr.id === id);

        if (productExist) {
            let updatedProduct = state.cart.map((curr) => {
                if (curr.id === id) {
                    let updatedAmount = curr.amount + amount;
                    return {
                        ...curr,
                        amount: updatedAmount,
                    }
                } else {
                    return curr;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            }
        }

        let cartProduct;

        cartProduct = {
            id,
            name: product.title,
            amount,
            image: product.images[0],
            price: product.price,
        }

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curr) => curr.id !== action.payload
        );

        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        localStorage.setItem("CartStore", "");
        return {
            ...state,
            cart: [],
        }
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let totalPrice = state.cart.reduce((initialValue, curr) => {
            let { price, amount } = curr;

            initialValue = initialValue + price * amount;

            return initialValue;
        }, 0)

        return {
            ...state,
            totalPrice: totalPrice,
        }
    }
}

export default cartReducer;