export const addItemToCart = (cartItems, itemToAdd) => {
    const isItemExists = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    let newList = [];
    if(isItemExists) {
        newList = cartItems.map((cartItem) => {
            return {
                ...cartItem,
                quantity: cartItem.id === itemToAdd.id ? cartItem.quantity + 1 : cartItem.quantity
            }
        })
    } else {
        newList = [...cartItems, {...itemToAdd, quantity: 1}]
    }

    return newList;
}
 