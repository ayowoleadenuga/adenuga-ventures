import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_aLV964hZKSPNAkCjQ5uuEtDU00sY6KEBEs";
    const onToken = token => {
        console.log(token);
        alert('Payment made successfully');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Adenuga Ventures'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;