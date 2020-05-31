let initialState = {
    cartItems: null,
    totalPrice: 0,
    isHidden: true
}

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_VISIBILITY":
            return {
                ...state,
                isHidden: action.status
            }
        case "UPDATE_PRICE":
            return {
                ...state,
                totalPrice: action.price
            }
        case "ADD_ITEM_TO_CART":
            let newItem = {
                image: action.item.imageUrl, // тут будет пизда по ходу
                name: action.item.itemName,
                price: action.item.itemPrice
            }
            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            }
        default:
            return state
    }
        
}

export default cartReducer;

export const updateIsHidden = (status) => ({type: "CHANGE_VISIBILITY", status})
export const updateTotalPrice = (price) => ({type: "UPDATE_PRICE", price})
export const addItemToCart = (item) => ({type: "ADD_ITEM_TO_CART", item})
