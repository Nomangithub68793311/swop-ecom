import actionTypes from './actionTypes'
import axios from 'axios'

export const getProduct = async dispatch => {
  dispatch({
    type: actionTypes.getProductRequest,
  })
  try {
    const { data } = await axios.get(
      'https://travherswopapp.herokuapp.com/site/product',
    )

    dispatch({
      type: actionTypes.getProduceSuccessfull,
      payload: data.products,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.getProductFail,
    })
  }
}
