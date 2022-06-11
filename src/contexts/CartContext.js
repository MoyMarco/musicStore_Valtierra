import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([]);

    const addItemToCart = product => {
        const isInCart = cartListItems.find(item => item.id === product.id);
        if (!isInCart) setCartListItems(cartListItems => [...cartListItems, product])
        else {
            const newCartListItems = cartListItems.map(item => {
                if (item.id === product.id) return { ...item, quantity: item.quantity + product.quantity }
                return item
            })
            setCartListItems(newCartListItems);
        }
    };

    const clearCart = () => {
        setCartListItems([])
    };

    const removeItem = itemId => {
        const newCartListItems = cartListItems.filter(item => item.id !==  itemId)
        setCartListItems(newCartListItems);
    };

    const data = { 
        removeItem,
        clearCart,
        cartListItems,
        addItemToCart
    };

    return (
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };
 