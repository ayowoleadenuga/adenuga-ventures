import { UserActionTypes } from './user.types'
import CartActionTypes from '../cart/cart.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})