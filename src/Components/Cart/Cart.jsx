import React from 'react';

let Cart = (props) => {
    return (
        <section>
            <h2>Cart</h2>

            {!props.isHidden && 
            <div>
                {
                props.cartItems ? 
                props.cartItems.map(i => <div>Pisya</div>) :
                <p>Your cart is empty</p>
                }
                
            </div>}
            

        {props.isHidden ? 
        <button onClick={() => {props.updateIsHidden(false)}}>Show cart</button> :
        <button onClick={() => {props.updateIsHidden(true)}}>Hide cart</button>}

        </section>
    )
}

export default Cart