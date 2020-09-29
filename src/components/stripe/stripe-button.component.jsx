import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_51HWcoID48RkfC9hBPRKjC1P0JK2ssjrj4bPCv1F1G74GfFVXCaXUuzqD1hHZdwmrD4SVN5nOWavhgNEltbaAiAY700eaxEV23B';

    const  onToken = (token) => {
        console.log(token);
        alert('Payment Success')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='ReactECommerceApp'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total amount is ${price}`}
            amount={price}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;