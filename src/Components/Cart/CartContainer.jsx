import React from 'react'
import Cart from './Cart'
import {connect} from 'react-redux'
import {updateIsHidden} from './../../redux/cartReducer'

let mapStateToProps = (state) => {

    return {
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice,
        isHidden: state.cart.isHidden
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateCartVisibility: dispatch(updateCartVisibility)
//     }
// }

const CartContainer = connect(mapStateToProps, {updateIsHidden}) (Cart)

export default CartContainer