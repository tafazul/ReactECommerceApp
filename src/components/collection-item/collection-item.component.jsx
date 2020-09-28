import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.scss';

const CollectionItem = ({item, addItemToCartDispatch}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div
                style = {{backgroundImage: `url(${imageUrl})`}}
                className='image'>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItemToCartDispatch(item)}> ADD TO CART </CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCartDispatch: (item) => dispatch(addItemToCart(item))  
})

export default connect(null, mapDispatchToProps)(CollectionItem);