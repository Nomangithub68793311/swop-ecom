import { cartActionTypes } from './cartActionTypes'
import axios from 'axios'

export const addItem = (data, dispatch) => {
  dispatch({
    type: cartActionTypes.addItem,
    payload: data,
  })
}

export const removeItem = (data, dispatch) => {
  dispatch({
    type: cartActionTypes.removeItem,
    payload: data,
  })
}

export const incrementQty = (data, dispatch) => {
  dispatch({
    type: cartActionTypes.incrementQty,
    payload: data,
  })
}
export const decrementtQty = (data, dispatch) => {
  dispatch({
    type: cartActionTypes.decrementQty,
    payload: data,
  })
}

export const chackrefferelCode = async (refCode, dispatch) => {
  dispatch({
    type: cartActionTypes.checkrefRequest,
  })
  try {
    const { data } = await axios.post(
      'https://travherswopapp.herokuapp.com/site/referralCode',
      {
        referralCode: refCode,
      },
    )
    if (data.found) {
      dispatch({
        type: cartActionTypes.checkRefSuccess,
      })
    } else {
      dispatch({
        type: cartActionTypes.checkRefFail,
      })
    }
  } catch (error) {
    dispatch({
      type: cartActionTypes.checkRefFail,
    })
  }
}

export const resetCartItem = dispatch =>
  dispatch({
    type: cartActionTypes.resetCart,
  })

export const clearRefAttmpt = dispatch =>
  dispatch({ type: cartActionTypes.clearRefAttempt })
