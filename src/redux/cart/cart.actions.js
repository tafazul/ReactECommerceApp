import cartActionTypes from './cart.types';
export const toggleCartDropdown = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_DROPDOWN
    } 
}

export const addItemToCart = (item) => {
    return {
        type: cartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    } 
}