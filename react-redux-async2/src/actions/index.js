import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
};

const addToCardUnsafe = productId => ({
    type: types.ADD_TO_CARD,
    productId
});

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCardUnsafe(productId))
    }
}

export const checkout = products => (dispatch, getState) => {
    const { card } = getState();

    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.buyProduct(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            card
        })
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
}
